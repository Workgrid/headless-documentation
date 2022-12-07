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
import Modal from './Modal'
import useModal from './hooks/useModal'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import IconButton from '@mui/material/IconButton'
import DeleteIcon from '@mui/icons-material/Delete'
import { AdaptiveCardUsingHostConfigContext } from 'adaptivecards-react'

export default function Notification({ node, onDeleteHandler, onActionHandler }) {
  const [payload, isOpen, handleOpenModal, handleCloseModal] = useModal(false)

  const handleOnExecuteAction = (e) => {
    if (e._propertyBag.type === 'Action.ShowCard') {
      const card = JSON.parse(JSON.stringify(e.card))
      handleOpenModal(card)
    } else if (e._propertyBag.type === 'Action.Submit') {
      onActionHandler(node.id, e.data)
      handleCloseModal()
    }
  }

  if (!node.view) return <div></div>

  return (
    <Card sx={{ maxWidth: '400px', margin: '15px' }}>
      <CardContent>
        <Modal open={isOpen} handleClose={handleCloseModal}>
          {payload && <AdaptiveCardUsingHostConfigContext payload={payload} onExecuteAction={handleOnExecuteAction} />}
        </Modal>
        <AdaptiveCardUsingHostConfigContext payload={node.view} onExecuteAction={handleOnExecuteAction} />
        {node.isDeletable ? (
          <div style={{ display: 'flex', justifyContent: 'right' }}>
            <IconButton aria-label="delete" onClick={() => onDeleteHandler(node.id)}>
              <DeleteIcon />
            </IconButton>
          </div>
        ) : (
          <></>
        )}
      </CardContent>
    </Card>
  )
}
