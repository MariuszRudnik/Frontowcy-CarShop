import { useMutation } from '@tanstack/react-query';
import { apiCall } from '../utils/apiCall';
import { Part, PartDto } from '../types';

export const useCreatePartMutation = () => {
  return useMutation({
    mutationKey: ['new-part'],
    mutationFn: async (body: PartDto) => {
      apiCall<Part, PartDto>('parts', {
        method: 'POST',
        body,
      });
    },
  });
};
