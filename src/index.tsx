import React from "react";
import ReactDOM from "react-dom";
import createApolloClient from "./apollo/client";
import { ApolloProvider } from "@apollo/client";

import Counter from "./pages/counter";

import App from "./App";

async function bootstrap() {
  const client = await createApolloClient();
  ReactDOM.render(
    <ApolloProvider client={client}>
      {/* <App /> */}
      <Counter />
    </ApolloProvider>,

    document.getElementById("root")!
  );
}

bootstrap();
