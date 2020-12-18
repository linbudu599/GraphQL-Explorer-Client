import * as React from "react";
import { useQuery } from "@apollo/client";
import { IS_LOGGED_IN } from "./apollo/client";
import ContainerRegisterTime from "./components/ContainerRegisterTime";
import LogoutBtn from "./components/Logout";
import { LoginCheck } from "./pages/Auth";
import { ICheckLoginedIn } from "./typing";

const App = () => {
  const { error, loading, data } = useQuery<ICheckLoginedIn>(IS_LOGGED_IN);

  if (error) return <h1>ERROR</h1>;

  return (
    <>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
          <h2>UNDER_DEVELOPING</h2>
          <LoginCheck pass={data.isLoggedIn}>
            <ContainerRegisterTime />
            <LogoutBtn />
          </LoginCheck>
        </>
      )}
    </>
  );
};

export default App;
