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
import useFetchNotifications from './hooks/useFetchNotifications'
import useDeleteNotification from './hooks/useDeleteNotification'
import useActionNotification from './hooks/useActionNotification'

export default function Notifications() {
  const [notifications, setNotifications, loading, error] = useFetchNotifications()

  const [deleteNotification] = useDeleteNotification()
  const [actionNotification] = useActionNotification()

  const handleDelete = (id) => {
    deleteNotification({ variables: { input: { spaceId: process.env.REACT_APP_SPACE_ID, notificationId: id } } })
    setNotifications(notifications.filter((notification) => notification.node.id !== id))
  }
  const handleAction = (id, data) => {
    actionNotification({ variables: { input: { spaceId: process.env.REACT_APP_SPACE_ID, notificationId: id, data } } })
    setNotifications(notifications.filter((notification) => notification.node.id !== id))
  }

  // Content is not ready, show error/loader
  if (loading) return <h1 className="notification-header">Loading notifications...</h1>
  if (error) return <pre>{error.message}</pre>

  return (
    <div>
      {notifications.map((edge, idx) => (
        <Notification key={idx} node={edge.node} onDeleteHandler={handleDelete} onActionHandler={handleAction} />
      ))}
    </div>
  )
}
