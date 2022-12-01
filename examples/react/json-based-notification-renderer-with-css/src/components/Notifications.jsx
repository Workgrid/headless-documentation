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

import React from 'react'
import { useQuery, gql } from '@apollo/client'
import Notification from './Notification'

// GraphQL Query for list of notifications
const GET_NOTIFICATIONS_QUERY = gql`
  query GetNotifications($spaceId: ID!, $in: [NotificationLocation!]!) {
    me {
      space(spaceId: $spaceId) {
        notifications(in: $in) {
          edges {
            node {
              view
              location
            }
          }
        }
      }
    }
  }
`

export default function Notifications() {
  // GraphQL Query hook to automatically fetch data
  const { data, loading, error } = useQuery(GET_NOTIFICATIONS_QUERY, {
    variables: { spaceId: process.env.REACT_APP_SPACE_ID, in: ['TOKNOW', 'TODO'] },
  })

  // Content is not ready, show error/loader
  if (loading) return <h1 className="notification-header">Loading notifications...</h1>
  if (error) return <pre>{error.message}</pre>

  return (
    <div>
      {data.me.space.notifications.edges?.map((edge, idx) => (
        <Notification {...edge} />
      ))}
    </div>
  )
}
