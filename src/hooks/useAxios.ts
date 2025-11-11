import axios from 'axios';
import { z } from 'zod';

const api = axios.create({
  baseURL: 'http://localhost:8080'
});

interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: {
    message: string;
    details?: z.ZodError;
  };
}

/**
 * hook for getting all the getAll[Type] tables,
 * like getAllRecipes, getAllFoods, getAllTags, getAllRecipeTags
 * @param path the url ending to complement the baseurl
 * @param schema data schema so zod can validate the data
 * @returns all the data
 */
export const fetchDataAll = async <T extends z.ZodType>(
  path: string,
  schema: T
): Promise<z.infer<typeof schema>> => {
  const response = await api.get(path);
  const result = schema.safeParse(response.data);
  if (!result.success) {
    throw new Error(`API response validation failed: ${result.error}`);
  }
  return result.data;
};
