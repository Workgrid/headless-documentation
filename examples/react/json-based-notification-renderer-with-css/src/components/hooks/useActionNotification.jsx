import { useMutation, gql } from '@apollo/client'
import { useApolloClient } from '@apollo/client'
import deleteNotificationFromCache from './utils/deleteNotificationFromCache'

// GraphQL Mutation to action on a notification
const ACTION_NOTIFICATION_MUTATION = gql`
  mutation actionNotification($input: ActionNotificationInput!) {
    actionNotification(input: $input)
  }
`

export default function useActionNotification() {
  const client = useApolloClient()
  const [actionNotificationFunction, { loading, error }] = useMutation(ACTION_NOTIFICATION_MUTATION, {
    update(cache, mutationResult) {
      deleteNotificationFromCache(cache, mutationResult)
    },
    // On successful delete, clean up cache
    onCompleted() {
      client.cache.gc()
    },
  })

  return [actionNotificationFunction, loading, error]
}
