import { useMutation, useQueryClient } from '@tanstack/react-query';
import { apiCall } from '../utils/apiCall';
import { SingleCategory } from '../types';

export const useDeleteCategoryMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: ['delete-Category'],
    mutationFn: async (id: string) => {
      apiCall<SingleCategory>(`categories/${id}`, {
        method: 'DELETE',
      });
    },
    onSuccess: () => {
      console.log('detete');
      queryClient.invalidateQueries({
        queryKey: ['categories'],
      });
    },
  });
};
