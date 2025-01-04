import { SingleCategory } from '../../../types';

export const GetCategoryLoader = async () => {
  const response = await fetch('http://localhost:3001/categories');
  return response.json() as Promise<SingleCategory[]>;
};
