import { useMutation, useQueryClient } from '@tanstack/react-query';
import { apiCall } from '../utils/apiCall';
import { Part } from '../types';

export const useDeletePartMutation = (catName: string) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: ['delete-Part'],
    mutationFn: async (id: string) => {
      apiCall<Part>(`parts/${id}`, {
        method: 'DELETE',
      });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['parts', catName],
      });
    },
  });
};
