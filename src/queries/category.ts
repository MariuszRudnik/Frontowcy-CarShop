import { queryOptions } from '@tanstack/react-query';
import { apiCall } from '../utils/apiCall';
import { SingleCategory } from '../types';

export const categoryOptions = queryOptions({
  queryKey: ['categories'],
  queryFn: async () => {
    return apiCall<SingleCategory[]>('categories');
  },
});
