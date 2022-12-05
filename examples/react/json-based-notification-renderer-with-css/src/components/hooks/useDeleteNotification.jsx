import { useMutation, gql } from '@apollo/client'

const DELETE_NOTIFICATION_MUTATION = gql`
  mutation deleteNotification($input: DeleteNotificationInput!) {
    deleteNotification(input: $input)
  }
`

export default function useDeleteNotification() {
  const [deleteNotificationFunction, { loading, error }] = useMutation(DELETE_NOTIFICATION_MUTATION)

  return [deleteNotificationFunction, loading, error]
}
