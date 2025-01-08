import React, { Suspense } from 'react';
import { Outlet, createRootRouteWithContext } from '@tanstack/react-router';
import { Navbar } from '../components/Navbar';
import { QueryClient } from '@tanstack/react-query';

const TanStackRouterDevtools = import.meta.env.DEV
  ? React.lazy(() =>
      import('@tanstack/router-devtools').then((res) => ({
        default: res.TanStackRouterDevtools,
      }))
    )
  : null;

type RootContext = {
  queryClient: QueryClient;
};

export const Route = createRootRouteWithContext<RootContext>()({
  component: RootComponent,
});

function RootComponent() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Suspense>
        {TanStackRouterDevtools && <TanStackRouterDevtools />}
      </Suspense>
    </>
  );
}
