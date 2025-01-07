import { queryOptions } from '@tanstack/react-query';
import { fetchCategories } from '../../../fetch/fetch.tsx';

export const categoriesQuery = queryOptions({
  queryKey: ['categories'],
  queryFn: fetchCategories,
});
