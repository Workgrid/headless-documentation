import useFetchNotifications from './useFetchNotifications'

export default function useNotifications() {
  const [toknows, loading, error, fetchMore] = useFetchNotifications({
    location: 'TOKNOW',
  })

  // Remove a node from the list
  const removeNodeById = (id) => {
    // setNotifications(notifications.filter((todo) => todo.node.id !== id))
  }

  const fetchMoreNotifications = () => {
    // Fetch more toknows
    if (toknows?.pageInfo?.hasNextPage) {
      fetchMore({ variables: { cursor: toknows.pageInfo.endCursor } })
    } else {
    }
  }

  const notifications = toknows?.edges || []
  const hasNextPage = toknows?.pageInfo?.hasNextPage

  return [notifications, loading, error, hasNextPage, removeNodeById, fetchMoreNotifications]
}
