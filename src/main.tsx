import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import { routeTree } from './routeTree.gen'
import { RouterProvider, createRouter } from '@tanstack/react-router'

const router = createRouter({ routeTree })

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <RouterProvider router={router} />
    </StrictMode>,
)