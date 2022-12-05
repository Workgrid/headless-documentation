import { useEffect, useState } from 'react'
import { useQuery, gql } from '@apollo/client'

// GraphQL Query for list of notifications
const GET_NOTIFICATIONS_QUERY = gql`
  query GetNotifications($spaceId: ID!, $in: [NotificationLocation!]!) {
    me {
      space(spaceId: $spaceId) {
        notifications(in: $in) {
          edges {
            node {
              id
              isDeletable
              view
              location
            }
          }
        }
      }
    }
  }
`

export default function useFetchNotifications() {
  const [notifications, setNotifications] = useState([])

  const { data, loading, error } = useQuery(GET_NOTIFICATIONS_QUERY, {
    variables: { spaceId: process.env.REACT_APP_SPACE_ID, in: ['TOKNOW', 'TODO'] },
  })

  const notificationEdges = data?.me?.space?.notifications?.edges

  useEffect(() => {
    notificationEdges && setNotifications(notificationEdges)
  }, [notificationEdges])

  return [notifications, setNotifications, loading, error]
}
