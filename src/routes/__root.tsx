import * as React from 'react';
import { Outlet, createRootRoute, Link } from '@tanstack/react-router';
import { Suspense } from 'react';
import { AppBar, Box, Toolbar, Typography } from '@mui/material';

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
    <React.StrictMode>
      <Box sx={{ flexGrow: 1 }}>
        <Link to="/">
          <AppBar position="static">
            <Toolbar>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                CarShop
              </Typography>
            </Toolbar>
          </AppBar>
        </Link>
      </Box>
      <Outlet />
      <Suspense>
        {TanStackRouterDevtools && <TanStackRouterDevtools />}
      </Suspense>
    </React.StrictMode>
  );
}
