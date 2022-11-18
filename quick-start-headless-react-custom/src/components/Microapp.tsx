import React from "react";
import { useQuery, gql, NetworkStatus } from "@apollo/client";
import Loader from "./Loader";
import Card from "./Card";
import { isEmpty } from "lodash";

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
`;

const Microapp = ({ node }) => {
  // GraphQL Query hook to automatically fetch data
  const { data, loading, error, refetch, networkStatus } = useQuery(
    GET_MICROAPP_QUERY,
    {
      variables: {
        spaceId: process.env.SPACE_ID,
        entrypoint: node.entrypoint
      },
      notifyOnNetworkStatusChange: true
    }
  );

  // Handle action for execute button
  const onExecuteAction = (e) => {
    if (isEmpty(e.data)) {
      refetch({ entrypoint: e.id });
    } else {
      refetch({ entrypoint: e.id, data: e.data });
    }
  };

  // Content is not ready, show error/loader
  if (error) return <div>{error.message}</div>;
  if (loading || networkStatus === NetworkStatus.refetch) return <Loader />;

  return (
    <Card card={data.me.space.appView.view} onExecuteAction={onExecuteAction} />
  );
};

export default Microapp;
