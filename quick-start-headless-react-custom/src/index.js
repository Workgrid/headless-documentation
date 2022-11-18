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
import hostConfig from "./hostConfig";
import { ProvidesHostConfigContext } from "adaptivecards-react";
import App from "./App";

import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme";

import "./styles.css";

// import environment variables
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

// Link to the api
export const apolloClient = new ApolloClient({
  cache,
  link: authLink.concat(httpLink)
});

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <ProvidesHostConfigContext hostConfig={hostConfig}>
      <ApolloProvider client={apolloClient}>
        <ThemeProvider theme={theme}>
          <App />
        </ThemeProvider>
      </ApolloProvider>
    </ProvidesHostConfigContext>
  </React.StrictMode>,
  rootElement
);
