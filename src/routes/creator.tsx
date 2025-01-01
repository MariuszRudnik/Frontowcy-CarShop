import { createFileRoute } from '@tanstack/react-router';
import CategoryPage from '../pages/Creator/Cateogy.tsx';

export const Route = createFileRoute('/creator')({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div>
      <CategoryPage />
    </div>
  );
}
