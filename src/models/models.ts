export type RecipeIngredientType = {
  amount: string;
  ingredient: string;
};

export type RecipeType = {
  index: number;
  title: string;
  time: number;
  ingredients: RecipeIngredientType[];
  instructions: string;
  ratings: number;
  tags: string[];
};
