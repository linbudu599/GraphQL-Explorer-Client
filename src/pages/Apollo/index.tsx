import React from 'react';

import { useQuery } from '@apollo/client';
import { IS_LOGGED_IN } from '@/apollo/client';
import ToggleLogStatus from './ToggleLogStatus';

export interface ICheckLoginedIn {
  isLoggedIn: boolean;
}

const ApolloPage: React.FC = () => {
  const { error, loading, data } = useQuery<ICheckLoginedIn>(IS_LOGGED_IN);

  if (error) return <h1>ERROR</h1>;

  return (
    <>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
          <h2>UNDER_DEVELOPING</h2>
          {JSON.stringify(data)}
        </>
      )}
      <br />
      <ToggleLogStatus currentLogin={data?.isLoggedIn ?? false} />
    </>
  );
};

export default ApolloPage;
