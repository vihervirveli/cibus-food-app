import React, { useEffect, useState } from 'react';
import { RecipeType } from '../models/models';
import { Recipe } from './Recipe';
import { Container } from '@mui/material';
import axios from 'axios';
import { fetchDataAll } from '../hooks/useAxios';
import { number, z } from 'zod';
export const RecipeList: React.FC = () => {
  const [recipes, setRecipes] = useState<RecipeType[] | null>([]);

  useEffect(() => {
    // const getData = async () => {
    //   try {
    //     const res = await axios.get('http://localhost:8080/v1/recipe/');
    //     console.log('RecipeList GetData succeeded', res.data);
    //     setRecipes(res.data);
    //   } catch (error) {
    //     console.error('Error', error);
    //   }
    // };
    // getData();
    const loadData = async () => {
      const recipeTypeSchema = z.object({
        id: z.number(),
        title: z.string(),
        time: z.number(),
        preview: z.string(),
        instructions: z.string(),
        ratings: z.number()
      });
      const recipeTypesSchema = z.array(recipeTypeSchema);

      const recipes = await fetchDataAll('/v1/recipe/', recipeTypesSchema);
      setRecipes(recipes);
    };
    loadData();
  }, []);
  return (
    <Container className='recipe-list'>
      <div className='recipe-list-content'>
        <h2 className='recipe-list-title'>Recipes</h2>
        <div className='recipe-list-align'>
          {recipes &&
            recipes.map((recipe) => {
              return <Recipe recipe={recipe} key={recipe.id} />;
            })}
        </div>
      </div>
    </Container>
  );
};
