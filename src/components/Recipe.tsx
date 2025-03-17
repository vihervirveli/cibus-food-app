import React from 'react';
import { RecipeType } from '../models/models';

interface RecipeProps {
  food: RecipeType;
}

export const Recipe: React.FC<RecipeProps> = ({ food }) => {
  return (
    <div className="recipe">
      <div>{food.title}</div>
      <div>{food.time} minutes</div>
      <div>{food.instructions}</div>
      <div>Rating: {food.ratings}</div>
      <div>{food.tags.join(', ')}</div>
    </div>
  );
};
