import React, { Suspense } from 'react';
import { Outlet, createRootRouteWithContext } from '@tanstack/react-router';
import { Navbar } from '../components/Navbar';

const TanStackRouterDevtools = import.meta.env.DEV
  ? React.lazy(() =>
      import('@tanstack/router-devtools').then((res) => ({
        default: res.TanStackRouterDevtools,
      }))
    )
  : null;

export const Route = createRootRouteWithContext()({
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
