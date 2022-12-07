import { useMutation, gql } from '@apollo/client'

const ACTION_NOTIFICATION_MUTATION = gql`
  mutation actionNotification($input: ActionNotificationInput!) {
    actionNotification(input: $input)
  }
`

export default function useActionNotification() {
  const [actionNotificationFunction, { loading, error }] = useMutation(ACTION_NOTIFICATION_MUTATION)

  return [actionNotificationFunction, loading, error]
}
