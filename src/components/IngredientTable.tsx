import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { RecipeIngredientType } from '../models/models';

interface IngredientProps {
  ingredients: RecipeIngredientType[];
}
export const IngredientTable: React.FC<IngredientProps> = ({ ingredients }) => {
  return (
    <TableContainer component={Paper}>
      <Table aria-label='simple table'>
        <TableHead>
          <TableRow>
            <TableCell align='right'>Amount</TableCell>
            <TableCell align='right'>Ingredient</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {ingredients.map((ingredientObj) => (
            <TableRow key={ingredientObj.ingredient}>
              <TableCell align='right'>
                {ingredientObj.amount === 'sprinkle'
                  ? ''
                  : ingredientObj.amount}
              </TableCell>
              <TableCell align='right'>{ingredientObj.ingredient}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
