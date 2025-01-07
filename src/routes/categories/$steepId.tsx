import { createFileRoute } from '@tanstack/react-router';
import CategoryPage from '../../pages/Creator/Cateogy.tsx';
import CarDetails from '../../pages/Creator/CarDetails.tsx';
import Steps from '../../pages/Creator/Steps.tsx';
import { categoriesQuery } from './-loader';

export const Route = createFileRoute('/categories/$steepId')({
  loader: (data) => {
    const { queryClient } = data.context;
    return queryClient.ensureQueryData(categoriesQuery);
  },
  component: RouteComponent,
});

function RouteComponent() {
  const { steepId } = Route.useParams();

  return (
    <>
      <CategoryPage>
        <CarDetails />
        <Steps steep={steepId} />
      </CategoryPage>
    </>
  );
}
