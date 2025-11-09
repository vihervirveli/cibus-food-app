import React, { useEffect, useState } from 'react';
import { RecipeType } from '../models/models';
import { Recipe } from './Recipe';
import { Container } from '@mui/material';
import axios from 'axios';

export const RecipeList: React.FC = () => {
  const [recipes, setRecipes] = useState<RecipeType[] | null>([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await axios.get('http://localhost:8080/v1/recipe/');
        console.log('GetData succeeded', res.data);
        setRecipes(res.data);
      } catch (error) {
        console.error('Error', error);
      }
    };
    getData();
  }, []);
  return (
    <Container className='recipe-list'>
      <div className='recipe-list-content'>
        <h2 className='recipe-list-title'>Recipes</h2>
        <div className='recipe-list-align'>
          {recipes &&
            recipes.map((recipe) => {
              return <Recipe food={recipe} key={recipe.id} />;
            })}
        </div>
      </div>
    </Container>
  );
};
