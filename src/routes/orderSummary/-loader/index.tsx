import { queryOptions } from '@tanstack/react-query';
import { fetchParts } from '../../../fetch/fetch.tsx';

export const partsQuery = queryOptions({
  queryKey: ['parts'],
  queryFn: fetchParts,
});
