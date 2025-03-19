import React from 'react';
import { RecipeType } from '../models/models';
import { Recipe } from './Recipe';

interface RecipeListProps {
  foods: RecipeType[];
}

export const RecipeList: React.FC<RecipeListProps> = ({ foods }) => {
  return (
    <div className='recipe-list'>
      <div className='recipe-list-content'>
        <h2 className='recipe-list-title'>Recipes</h2>
        <div className='recipe-list-align'>
          {foods.map((food) => {
            return <Recipe food={food} key={food.index} />;
          })}
        </div>
      </div>
    </div>
  );
};
