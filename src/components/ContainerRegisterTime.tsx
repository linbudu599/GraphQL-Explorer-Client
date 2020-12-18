import * as React from "react";
import { useQuery, gql } from "@apollo/client";

const QUERY_REGISTER_TIME = gql`
  query {
    ContainerRegisterTime
  }
`;

const ContainerRegisterTime = () => {
  const { loading, error, data } = useQuery<{ ContainerRegisterTime: number }>(
    QUERY_REGISTER_TIME,
    {
      pollInterval: 1000,
      fetchPolicy: "no-cache",
    }
  );

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error...</p>;

  return (
    <>
      <h2>Register Time: {data.ContainerRegisterTime}</h2>
    </>
  );
};

export default ContainerRegisterTime;
