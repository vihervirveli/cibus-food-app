import React from 'react';
import { RecipeList } from './RecipeList';
import { RecipeType } from '../models/models';

export const Content = () => {
  const foods: RecipeType[] = [
    {
      index: 1,
      title: 'Roasted chickpeas',
      time: 30,
      ingredients: [
        'chick pea',
        'vegetable oil',
        'ginger paste',
        'garam masala',
        'cumin',
        'salt'
      ],
      instructions:
        'Place on oven tray, slather with oil and sprinkle on the spices. Bake for 15 minutes in 200 °C / 392 F',
      ratings: 5,
      tags: ['chick pea', 'chickpea']
    },
    {
      index: 2,
      title: 'Dipped vegetables',
      time: 30,
      ingredients: [
        'dip',
        'sour cream',
        'paprica',
        'cucumber',
        'carrot',
        'zucchini'
      ],
      instructions:
        'Make the dip and put in the fridge. Cut up all vegetables. Dip vegetables in dip.',
      ratings: 3,
      tags: ['dip', 'sour cream', 'paprica', 'cucumber', 'carrot', 'zucchini']
    }
  ];

  return (
    <div className="content">
      <RecipeList foods={foods} />
    </div>
  );
};
