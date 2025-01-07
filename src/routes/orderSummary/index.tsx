import { createFileRoute } from '@tanstack/react-router';

import OrderSummary from '../../pages/OrderSummary/OrderSummary.tsx';
import { partsQuery } from './-loader';

export const Route = createFileRoute('/orderSummary/')({
  loader: (data) => {
    const { queryClient } = data.context;
    return queryClient.ensureQueryData(partsQuery);
  },
  component: RouteComponent,
});

function RouteComponent() {
  return <OrderSummary />;
}
