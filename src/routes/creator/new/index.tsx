import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/creator/new/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/creator/new/"!</div>
}
