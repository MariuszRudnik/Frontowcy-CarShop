import { queryOptions } from '@tanstack/react-query';
import { apiCall } from '../utils/apiCall';
import { Singleparts } from '../types';

export const partsOptions = (catName: string) =>
  queryOptions({
    queryKey: ['parts', catName],
    queryFn: async () => {
      return apiCall<Singleparts[]>(`parts?category=${catName}`);
    },
  });
