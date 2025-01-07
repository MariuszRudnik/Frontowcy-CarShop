import React, { Suspense } from 'react';
import { Outlet, createRootRoute } from '@tanstack/react-router';
import { Navbar } from '../components/Navbar';

const TanStackRouterDevtools = import.meta.env.DEV
  ? React.lazy(() =>
      import('@tanstack/router-devtools').then((res) => ({
        default: res.TanStackRouterDevtools,
      }))
    )
  : null;

export const Route = createRootRoute({
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
