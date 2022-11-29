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
import { AdaptiveCardUsingHostConfigContext } from 'adaptivecards-react'
import { useQuery, gql } from '@apollo/client'
import Loader from './Loader'
import { omit } from 'lodash'

// GraphQL Query for microapp content
const GET_MICROAPP_QUERY = gql`
  query GetMicroapp($spaceId: ID!, $endpoint: String!, $data: JSONObject) {
    me {
      space(spaceId: $spaceId) {
        appView(endpoint: $endpoint, data: $data) {
          view
        }
      }
    }
  }
`

const Microapp = ({ node, key }) => {
  const [queryVariables, setQueryVariables] = useState({
    spaceId: process.env.REACT_APP_SPACE_ID,
    endpoint: node.endpoint,
  })

  // GraphQL Query hook to automatically fetch data
  const { data, loading, error } = useQuery(GET_MICROAPP_QUERY, {
    variables: queryVariables,
  })

  // Handle action for execute button
  const onExecuteAction = (e) => {
    const data = e.data
    if (data.endpoint) {
      setQueryVariables({
        spaceId: process.env.REACT_APP_SPACE_ID,
        endpoint: data.endpoint,
        data: data.data ? omit(data.data, 'endpoint') : undefined,
      })
    }
  }

  // Content is not ready, show error/loader
  if (error) return <div>{error.message}</div>
  if (loading)
    return (
      <Loader
        style={{
          width: '400px',
          boxShadow: 'rgb(0 0 0 / 25%) 0px 1px 5px 0px',
          margin: '15px 0',
        }}
      />
    )

  return (
    <AdaptiveCardUsingHostConfigContext
      style={{
        width: '400px',
        boxShadow: 'rgb(0 0 0 / 25%) 0px 1px 5px 0px',
        margin: '15px 0',
      }}
      payload={data.me.space.appView.view}
      onExecuteAction={onExecuteAction}
    />
  )
}

export default Microapp
