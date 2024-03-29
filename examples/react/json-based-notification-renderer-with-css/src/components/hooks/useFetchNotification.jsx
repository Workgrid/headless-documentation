/**
 * Copyright 2022 Workgrid Software
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { useLazyQuery, gql } from '@apollo/client'

export const GET_NOTIFICATION = gql`
  query GetNotificationDynamicDetail($spaceId: ID!, $id: ID!) {
    me {
      space(spaceId: $spaceId) {
        notification(id: $id) {
          dynamicDetailView
        }
      }
    }
  }
`

export default function useFetchNotification() {
  const [getNotification, { loading, data }] = useLazyQuery(GET_NOTIFICATION)

  const card = data?.me?.space?.notification?.dynamicDetailView?.card
  return [getNotification, loading, card]
}
