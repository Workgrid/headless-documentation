import { useQuery, gql } from '@apollo/client'

// GraphQL Query for list of notifications
const GET_NOTIFICATIONS_QUERY = gql`
  query GetNotifications($spaceId: ID!, $cursor: String, $input: NotificationsInput!) {
    me {
      space(spaceId: $spaceId) {
        notifications(first: 6, after: $cursor, input: $input) {
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

  return [data?.me?.space?.notifications || [], loading, error, fetchMore]
}
