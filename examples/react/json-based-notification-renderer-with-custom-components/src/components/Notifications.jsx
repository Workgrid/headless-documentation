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
import Modal from './Modal'
import Box from '@mui/material/Box'
import LinearProgress from '@mui/material/LinearProgress'
import { TransitionGroup } from 'react-transition-group'
import Grow from '@mui/material/Grow'
import useFetchNotifications from './hooks/useFetchNotifications'
import useDeleteNotification from './hooks/useDeleteNotification'
import useModal from './hooks/useModal'

export default function Notifications() {
  const [payload, isOpen, handleOpenModal, handleCloseModal] = useModal(false)

  const [notifications, setNotifications, loading, error] = useFetchNotifications()

  const [deleteNotification] = useDeleteNotification()

  const handleDelete = (id) => {
    deleteNotification({ variables: { input: { spaceId: process.env.REACT_APP_SPACE_ID, notificationId: id } } })
    setNotifications(notifications.filter((notification) => notification.node.id !== id))
  }

  if (loading) {
    return (
      <Box>
        <LinearProgress />
      </Box>
    )
  }

  if (error) return <pre>{error.message}</pre>

  return (
    <div>
      <Modal open={isOpen} payload={payload} handleClose={handleCloseModal} />
      <TransitionGroup>
        {notifications.map((edge, idx) => (
          <Grow
            key={edge.node.id}
            timeout={600}
            style={{ transitionDelay: `${idx * 50}ms` }}
            onExiting={(node) => {
              node.style['transition-duration'] = '300ms'
              node.style['transition-delay'] = '0ms'
            }}
          >
            <Box sx={{ maxWidth: 400 }}>
              <Notification node={edge.node} onActionShowCardHandler={handleOpenModal} onDeleteHandler={handleDelete} />
            </Box>
          </Grow>
        ))}
      </TransitionGroup>
    </div>
  )
}
