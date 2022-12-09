import { useMutation, gql } from '@apollo/client'
import { useApolloClient } from '@apollo/client'
import deleteNotificationFromCache from './utils/deleteNotificationFromCache'

// GraphQL Mutation to delete a notification
const DELETE_NOTIFICATION_MUTATION = gql`
  mutation DeleteNotification($input: DeleteNotificationInput!) {
    deleteNotification(input: $input)
  }
`

export default function useDeleteNotification() {
  const client = useApolloClient()
  const [deleteNotificationFunction, { loading, error }] = useMutation(DELETE_NOTIFICATION_MUTATION, {
    update(cache, mutationResult) {
      deleteNotificationFromCache(cache, mutationResult)
    },
    // On successful delete, clean up cache
    onCompleted() {
      client.cache.gc()
    },
  })

  return [deleteNotificationFunction, loading, error]
}
