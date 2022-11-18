import React from "react";
import { useQuery, gql } from "@apollo/client";
import Microapp from "./Microapp";

// GraphQL Query for list of microapps
const GET_MICROAPPS_QUERY = gql`
  query GetMicroapps($spaceId: ID!) {
    me {
      space(spaceId: $spaceId) {
        id
        apps {
          edges {
            cursor
            node {
              title
              entrypoint
            }
          }
        }
      }
    }
  }
`;

export default function Microapps() {
  // GraphQL Query hook to automatically fetch data
  const { data, loading, error } = useQuery(GET_MICROAPPS_QUERY, {
    variables: { spaceId: process.env.SPACE_ID }
  });

  // Content is not ready, show error/loader
  if (loading) return <h1 className="microapp-header">Loading...</h1>;
  if (error) return <pre>{error.message}</pre>;

  return (
    <div className="microapp-page">
      <div className="microapp-container">
        {data.me.space.apps.edges?.map((edge, idx) => (
          <Microapp key={idx} {...edge} />
        ))}
      </div>
    </div>
  );
}
