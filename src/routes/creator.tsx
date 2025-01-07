import { createFileRoute } from '@tanstack/react-router';
import { categoryOptions } from '../queries/category';
import { AutoCreator } from '../pages/AutoCreator/AutoCreator';
import { Loading } from '../components/Loading';
import { Error } from '../components/Error';

export const Route = createFileRoute('/creator')({
  loader: ({ context }) => {
    const { queryClient } = context;
    return queryClient.ensureQueryData(categoryOptions);
  },
  component: AutoCreator,
  pendingComponent: Loading,
  errorComponent: Error,
});
