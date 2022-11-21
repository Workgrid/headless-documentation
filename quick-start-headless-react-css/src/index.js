import * as dotenv from "dotenv";
import React from "react";
import ReactDOM from "react-dom";
import {
  ApolloProvider,
  ApolloClient,
  createHttpLink,
  InMemoryCache
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

// Uncomment to apply custom styling
import "./styles.css";

import App from "./App";

// Import environment variables
dotenv.config();

const cache = new InMemoryCache();

// Set up Auth link to add authorization header
const httpLink = createHttpLink({
  uri: process.env.REACT_APP_GRAPHQL_URI
});

const authLink = setContext((_, { headers }) => {
  return {
    headers: {
      ...headers,
      authorization: process.env.REACT_APP_TOKEN ? `Bearer ${process.env.REACT_APP_TOKEN}` : ""
    }
  };
});

// Start the GraphQL client
const client = new ApolloClient({
  cache,
  link: authLink.concat(httpLink)
});

// Render App
const rootElement = document.getElementById("root");
ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  rootElement
);
