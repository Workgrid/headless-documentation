import { useEffect, useState } from 'react'
import { useQuery, gql } from '@apollo/client'

// GraphQL Query for list of notifications
const GET_NOTIFICATIONS_QUERY = gql`
  query GetNotifications($spaceId: ID!, $cursor: String, $input: NotificationsInput!) {
    me {
      space(spaceId: $spaceId) {
        notifications(first: 10, after: $cursor, input: $input) {
          edges {
            node {
              id
              view
              isDeletable
              location
            }
          }
          pageInfo {
            hasNextPage
            endCursor
          }
        }
      }
    }
  }
`

export default function useFetchNotifications({ location }) {
  const [notifications, setNotifications] = useState([])
  const [pageInfo, setPageInfo] = useState(null)

  const { data, loading, error, fetchMore } = useQuery(GET_NOTIFICATIONS_QUERY, {
    variables: {
      spaceId: process.env.REACT_APP_SPACE_ID,
      input: {
        location,
        filter: {
          orderBy: 'DATE',
        },
      },
    },
  })

  const edges = data?.me?.space?.notifications?.edges
  const notificationsPageInfo = data?.me?.space?.notifications?.pageInfo

  useEffect(() => {
    edges && setNotifications(edges)
  }, [edges])

  useEffect(() => {
    notificationsPageInfo && setPageInfo(notificationsPageInfo)
  }, [notificationsPageInfo])

  return [notifications, setNotifications, loading, error, pageInfo, fetchMore]
}
