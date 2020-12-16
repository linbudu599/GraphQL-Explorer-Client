import * as React from "react";
import { useQuery, gql } from "@apollo/client";

const QUERY_SUBSTANCE = gql`
  query {
    QueryAllSubstances {
      substanceId
      substanceName
      substanceAlive
    }
  }
`;

interface ISubstanceItem {
  substanceId: string;
  substanceName: string;
  substanceAlive: boolean;
}

const App = () => {
  const { loading, error, data } = useQuery(QUERY_SUBSTANCE);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error...</p>;

  return (
    <>
      <h2>UNDER_DEVELOPING</h2>
      {(data.QueryAllSubstances as ISubstanceItem[]).map(
        ({ substanceId, substanceName }) => {
          return (
            <p key={substanceId}>
              {substanceId}号选手{substanceName}
            </p>
          );
        }
      )}
    </>
  );
};

export default App;
