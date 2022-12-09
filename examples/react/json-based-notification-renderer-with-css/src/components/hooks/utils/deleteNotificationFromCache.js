import { GET_NOTIFICATIONS_QUERY } from '../useFetchNotifications'

const deleteNotificationFromCache = (cache, mutationResult) => {
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
  const deletedId = mutationResult?.data?.deleteNotification || mutationResult?.data?.actionNotification

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
}

export default deleteNotificationFromCache
