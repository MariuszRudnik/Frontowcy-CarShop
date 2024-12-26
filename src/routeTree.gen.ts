/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file was automatically generated by TanStack Router.
// You should NOT make any changes in this file as it will be overwritten.
// Additionally, you should also exclude this file from your linter and/or formatter to prevent it from being checked or modified.

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as PostsImport } from './routes/posts'

// Create/Update Routes

const PostsRoute = PostsImport.update({
  id: '/posts',
  path: '/posts',
  getParentRoute: () => rootRoute,
} as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/posts': {
      id: '/posts'
      path: '/posts'
      fullPath: '/posts'
      preLoaderRoute: typeof PostsImport
      parentRoute: typeof rootRoute
    }
  }
}

// Create and export the route tree

export interface FileRoutesByFullPath {
  '/posts': typeof PostsRoute
}

export interface FileRoutesByTo {
  '/posts': typeof PostsRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/posts': typeof PostsRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths: '/posts'
  fileRoutesByTo: FileRoutesByTo
  to: '/posts'
  id: '__root__' | '/posts'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  PostsRoute: typeof PostsRoute
}

const rootRouteChildren: RootRouteChildren = {
  PostsRoute: PostsRoute,
}

export const routeTree = rootRoute
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/posts"
      ]
    },
    "/posts": {
      "filePath": "posts.tsx"
    }
  }
}
ROUTE_MANIFEST_END */
