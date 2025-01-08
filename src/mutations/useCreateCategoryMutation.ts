import { useMutation, useQueryClient } from '@tanstack/react-query';
import { apiCall } from '../utils/apiCall';
import { SingleCategory, SingleCategoryDto } from '../types';

export const useCreateCategoryMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: ['new-Category'],
    mutationFn: async (body: SingleCategoryDto) => {
      apiCall<SingleCategory, SingleCategoryDto>('categories', {
        method: 'POST',
        body,
      });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['categories'],
      });
    },
  });
};
