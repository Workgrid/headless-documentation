import { useMutation, gql } from '@apollo/client'
import { GET_NOTIFICATIONS_QUERY } from './useFetchNotifications'
import { useApolloClient } from '@apollo/client'

const ACTION_NOTIFICATION_MUTATION = gql`
  mutation actionNotification($input: ActionNotificationInput!) {
    actionNotification(input: $input)
  }
`

export default function useActionNotification() {
  const client = useApolloClient()
  const [actionNotificationFunction, { loading, error }] = useMutation(ACTION_NOTIFICATION_MUTATION, {
    // Fired on optimistic response, and on actual response
    update(cache, mutationResult) {
      const queryOptions = {
        query: GET_NOTIFICATIONS_QUERY,
        variables: {
          spaceId: process.env.REACT_APP_SPACE_ID,
          input: {
            location: 'TOKNOW',
            filter: {
              orderBy: 'DATE',
            },
          },
        },
      }

      // Query the cache directly to get existing notifications
      const cachedData = cache.readQuery(queryOptions)

      // Grab id of notification that was deleted
      const deletedId = mutationResult?.data?.actionNotification

      // Re-write the cache without the deleted notification
      const data = {
        me: {
          ...cachedData.me,
          space: {
            ...cachedData.me.space,
            notifications: {
              ...cachedData.me.space.notifications,
              edges: cachedData.me.space.notifications.edges.filter((edge) => edge.node.id !== deletedId),
              pageInfo: cachedData.me.space.notifications.pageInfo,
            },
          },
        },
      }
      cache.writeQuery({ ...queryOptions, data })
    },
    // On successful delete, clean up cache
    onCompleted() {
      client.cache.gc()
    },
  })

  return [actionNotificationFunction, loading, error]
}
