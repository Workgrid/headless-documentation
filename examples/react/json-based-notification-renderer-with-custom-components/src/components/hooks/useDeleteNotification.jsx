import { useMutation, gql } from '@apollo/client'
import { GET_NOTIFICATIONS_QUERY } from './useFetchNotifications'
import { useApolloClient } from '@apollo/client'

// GraphQL Mutation to delete a notification
const DELETE_NOTIFICATION_MUTATION = gql`
  mutation DeleteNotification($input: DeleteNotificationInput!) {
    deleteNotification(input: $input)
  }
`

export default function useDeleteNotification() {
  const client = useApolloClient()
  const [deleteNotificationFunction, { loading, error }] = useMutation(DELETE_NOTIFICATION_MUTATION, {
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
      const deletedId = mutationResult?.data?.deleteNotification

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

  return [deleteNotificationFunction, loading, error]
}
