import { useMutation, gql } from '@apollo/client'
import { GET_NOTIFICATIONS_QUERY } from './useFetchNotifications'

const ACTION_NOTIFICATION_MUTATION = gql`
  mutation actionNotification($input: ActionNotificationInput!) {
    actionNotification(input: $input)
  }
`

export default function useActionNotification() {
  const [actionNotificationFunction, { loading, error }] = useMutation(ACTION_NOTIFICATION_MUTATION, {
    refetchQueries: [
      { query: GET_NOTIFICATIONS_QUERY }, // DocumentNode object parsed with gql
      'GetNotifications', // Query name
    ],
  })

  return [actionNotificationFunction, loading, error]
}
