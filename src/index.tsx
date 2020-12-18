import React from "react";
import ReactDOM from "react-dom";
import createApolloClient from "./apollo/client";
import { ApolloProvider } from "@apollo/client";

import App from "./App";

async function bootstrap() {
  const client = await createApolloClient();
  ReactDOM.render(
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>,
    document.getElementById("root")!
  );
}

bootstrap();
