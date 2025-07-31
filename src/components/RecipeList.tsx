import React from 'react';
import { RecipeType } from '../models/models';
import { Recipe } from './Recipe';
import { Container } from '@mui/material';
import foods from '../data/data';

export const RecipeList: React.FC = () => {
  return (
    <Container className='recipe-list'>
      <div className='recipe-list-content'>
        <h2 className='recipe-list-title'>Recipes</h2>
        <div className='recipe-list-align'>
          {foods.map((food) => {
            return <Recipe food={food} key={food.index} />;
          })}
        </div>
      </div>
    </Container>
  );
};
