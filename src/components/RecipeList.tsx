import React, { useEffect, useState } from 'react';
import { RecipeType } from '../models/models';
import { Recipe } from './Recipe';
import { Container } from '@mui/material';
import { fetchDataAll } from '../hooks/useAxios';
import { RecipeTypesSchema } from '../schema/schemas';
export const RecipeList: React.FC = () => {
  const [recipes, setRecipes] = useState<RecipeType[] | null>([]);

  useEffect(() => {
    /**
     * Loads recipes
     */
    const loadData = async () => {
      const recipes = await fetchDataAll('/v1/recipe/', RecipeTypesSchema);
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
