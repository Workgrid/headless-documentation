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

import React, { useState } from 'react'
import { useQuery, gql, NetworkStatus } from '@apollo/client'
import Loader from './Loader'
import Card from './Card'
import { isEmpty } from 'lodash'

// GraphQL Query for microapp content
const GET_MICROAPP_QUERY = gql`
  query GetMicroapp($spaceId: ID!, $entrypoint: String!, $data: JSONObject) {
    me {
      space(spaceId: $spaceId) {
        appView(entrypoint: $entrypoint, data: $data) {
          view
        }
      }
    }
  }
`

const Microapp = React.forwardRef(({ node, key }) => {
  // GraphQL Query hook to automatically fetch data
  const { data, loading, error, refetch, networkStatus } = useQuery(GET_MICROAPP_QUERY, {
    variables: {
      spaceId: process.env.REACT_APP_SPACE_ID,
      entrypoint: node.entrypoint,
    },
    notifyOnNetworkStatusChange: true,
  })

  // Handle action for execute button
  const onExecuteAction = (e) => {
    if (isEmpty(e.data)) {
      refetch({ entrypoint: e.id })
    } else {
      refetch({ entrypoint: e.id, data: e.data })
    }
  }

  // Content is not ready, show error/loader
  if (error) return <div>{error.message}</div>
  if (loading || networkStatus === NetworkStatus.refetch) return <Loader />

  return (
    <Card
      key={key}
      card={data.me.space.appView.view}
      onExecuteAction={onExecuteAction}
      onActionSubmit={onExecuteAction}
    />
  )
})

export default Microapp
