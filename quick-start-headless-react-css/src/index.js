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
import "./styles.css";
import App from "./App";

// Import environment variables
dotenv.config();

// Uncomment to apply custom styling

const cache = new InMemoryCache();

// Set up Auth link to add authorization header
const httpLink = createHttpLink({
  uri: process.env.GRAPHQL_URI
});

const authLink = setContext((_, { headers }) => {
  return {
    headers: {
      ...headers,
      authorization: process.env.TOKEN ? `Bearer ${process.env.TOKEN}` : ""
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
