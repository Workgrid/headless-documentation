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
import Notification from './Notification'
import InfiniteScroll from 'react-infinite-scroll-component'
import useFetchNotifications from './hooks/useFetchNotifications'
import useDeleteNotification from './hooks/useDeleteNotification'
import useActionNotification from './hooks/useActionNotification'

export default function Notifications() {
  const [todos, setTodos, loadingTodos, errorTodos, pageInfoTodos, fetchMoreTodos] = useFetchNotifications({
    location: 'TODO',
  })
  const [toknows, setToknows, loadingToknows, errorToknows, pageInfoToknows, fetchMoreToknows] = useFetchNotifications({
    location: 'TOKNOW',
  })
  const [deleteNotification] = useDeleteNotification()
  const [actionNotification] = useActionNotification()

  const updateNotificationState = (id) => {
    setTodos(todos.filter((todo) => todo.node.id !== id))
    setToknows(toknows.filter((toknow) => toknow.node.id !== id))
  }
  const handleDelete = (id) => {
    deleteNotification({ variables: { input: { spaceId: process.env.REACT_APP_SPACE_ID, notificationId: id } } })
    updateNotificationState(id)
  }
  const handleAction = (id, data) => {
    actionNotification({ variables: { input: { spaceId: process.env.REACT_APP_SPACE_ID, notificationId: id, data } } })
    updateNotificationState(id)
  }

  const fetchMoreNotifications = () => {
    fetchMoreTodos({
      variables: {
        cursor: pageInfoTodos.endCursor,
      },
    })
    fetchMoreToknows({
      variables: {
        cursor: pageInfoToknows.endCursor,
      },
    })
  }

  // Merge the notification types together
  const notifications = [...toknows, ...todos]
  const loading = loadingTodos || loadingToknows
  const error = errorTodos || errorToknows
  const hasNextPage = pageInfoTodos?.hasNextPage || pageInfoToknows?.hasNextPage

  // Content is not ready, show error/loader
  if (loading) return <h1 className="notification-header">Loading notifications...</h1>
  if (error) return <pre>{error.message}</pre>

  return (
    <InfiniteScroll
      dataLength={notifications.length}
      next={() => fetchMoreNotifications()}
      hasMore={hasNextPage}
      loader={<h4>Loading more notifications...</h4>}
      endMessage={
        <p style={{ textAlign: 'center' }}>
          <b>That's all!</b>
        </p>
      }
    >
      {notifications.map((edge, idx) => (
        <Notification key={idx} node={edge.node} onDeleteHandler={handleDelete} onActionHandler={handleAction} />
      ))}
    </InfiniteScroll>
  )
}
