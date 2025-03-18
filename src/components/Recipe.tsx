import React from 'react';
import { RecipeType } from '../models/models';

interface RecipeProps {
  food: RecipeType;
}

export const Recipe: React.FC<RecipeProps> = ({ food }) => {
  return (
    <div className='recipe'>
      <h4 className='recipe-title'>{food.title}</h4>
      <div className='recipe-time'>{food.time} min</div>
      <div className='recipe-preview'>
        <div className='recipe-preview-info'>
          <div>Rating: {food.ratings}</div>
          <div>tags: {food.tags.join(', ')}</div>
        </div>
        <div className='recipe-preview-pic'></div>
      </div>
    </div>
  );
};
