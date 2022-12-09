import useFetchNotifications from './useFetchNotifications'

export default function useNotifications() {
  const [toknows, loading, error, fetchMore] = useFetchNotifications()

  const fetchMoreNotifications = () => {
    if (toknows?.pageInfo?.hasNextPage) {
      fetchMore({ variables: { cursor: toknows.pageInfo.endCursor } })
    }
  }

  const notifications = toknows?.edges || []
  const hasNextPage = toknows?.pageInfo?.hasNextPage

  return [notifications, loading, error, hasNextPage, fetchMoreNotifications]
}
