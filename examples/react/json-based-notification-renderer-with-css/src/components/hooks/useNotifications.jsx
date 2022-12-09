import useFetchNotifications from './useFetchNotifications'

export default function useNotifications() {
  // Fetch notifications from the TODO location
  const [todos, loading, error, fetchMore] = useFetchNotifications({ location: 'TODO' })

  // Fetch the next page of notifications and merge with the existing page
  const fetchMoreNotifications = () => {
    if (todos?.pageInfo?.hasNextPage) {
      fetchMore({ variables: { cursor: todos.pageInfo.endCursor } })
    }
  }

  const notifications = todos?.edges || []
  const hasNextPage = todos?.pageInfo?.hasNextPage

  return [notifications, loading, error, hasNextPage, fetchMoreNotifications]
}
