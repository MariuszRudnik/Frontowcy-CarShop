import { createFileRoute } from '@tanstack/react-router';
import { Error } from '../../components/Error';
import { AutoCreator } from '../../pages/AutoCreator/AutoCreator';
import { GetCategoryLoader } from './-loader';
import { Loading } from '../../components/Loading';

export const Route = createFileRoute('/creator/')({
  loader: GetCategoryLoader,
  component: AutoCreator,
  pendingComponent: Loading,
  errorComponent: Error,
});
