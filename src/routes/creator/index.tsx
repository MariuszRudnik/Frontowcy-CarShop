import { createFileRoute } from '@tanstack/react-router'
import { Error } from '../../components/Error'
import { AutoCreator } from '../../pages/AutoCreator/AutoCreator'
import { Loading } from '../../components/Loading'
import { categoryOptions } from '../../queries/category'

export const Route = createFileRoute('/creator/')({
  loader: ({ context }) => {
    const { queryClient } = context
    return queryClient.ensureQueryData(categoryOptions)
  },
  component: AutoCreator,
  pendingComponent: Loading,
  errorComponent: Error,
})
