import { createFileRoute } from '@tanstack/react-router';
import CategoryPage from '../../pages/Creator/Cateogy.tsx';
import CarDetails from '../../pages/Creator/CarDetails.tsx';
import Steps from '../../pages/Creator/Steps.tsx';

export const Route = createFileRoute('/categories/$steepId')({
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
