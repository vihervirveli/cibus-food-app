import { z } from 'zod';

export const RecipeTypeSchema = z.object({
  id: z.number(),
  title: z.string(),
  time: z.number(),
  preview: z.string(),
  instructions: z.string(),
  ratings: z.number()
});

export const RecipeTypesSchema = z.array(RecipeTypeSchema);

export const RecipeTagTypeSchema = z.object({
  id: z.number(),
  tagId: z.number(),
  recipeId: z.number()
});

export const RecipeTagTypesSchema = z.array(RecipeTagTypeSchema);

export const TagTypeSchema = z.object({
  id: z.number(),
  tag: z.string()
});

export const TagTypesSchema = z.array(TagTypeSchema);
