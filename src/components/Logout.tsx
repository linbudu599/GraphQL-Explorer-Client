import React from "react";
import { useMutation } from "@apollo/client";

import { IS_LOGGED_IN_MUTATION } from "../apollo/client";

const LogoutBtn: React.FC = () => {
  const [logout] = useMutation(IS_LOGGED_IN_MUTATION, {
    update(cache) {
      cache.writeQuery({
        query: IS_LOGGED_IN_MUTATION,
        data: {
          isLoggedIn: false,
        },
      });
    },
  });

  return (
    <>
      <button
        onClick={() => {
          logout();
        }}
      >
        <h3>LOG OUT</h3>
      </button>
    </>
  );
};

export default LogoutBtn;
