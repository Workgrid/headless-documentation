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
import { AdaptiveCardUsingHostConfigContext } from 'adaptivecards-react'
import { useQuery, gql, NetworkStatus } from '@apollo/client'
import { isEmpty } from 'lodash'
import Loader from './Loader'

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

const Microapp = ({ node }) => {
  // GraphQL Query hook to automatically fetch and refetch data
  const { data, loading, error, refetch, networkStatus } = useQuery(GET_MICROAPP_QUERY, {
    variables: {
      spaceId: process.env.REACT_APP_SPACE_ID,
      entrypoint: node.entrypoint,
    },
    notifyOnNetworkStatusChange: true,
  })

  // Handle action click events
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
    <AdaptiveCardUsingHostConfigContext
      style={{
        maxWidth: '400px',
        boxShadow: 'rgb(0 0 0 / 25%) 0px 1px 5px 0px',
        margin: '15px 0',
      }}
      payload={data.me.space.appView.view}
      onExecuteAction={onExecuteAction}
    />
  )
}

export default Microapp
