export type RecipeIngredientType = {
  amount: string;
  ingredient: string;
};

export type RecipeType = {
  id: number;
  title: string;
  time: number;
  preview: string;
  instructions: string;
  ratings: number;
};

export type RecipeTagType = {
  id: number;
  tagId: number;
  recipeId: number;
};

export type TagType = {
  id: number;
  tag: string;
};
