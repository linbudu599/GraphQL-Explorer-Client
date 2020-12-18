import React from "react";

export const AuthFailed: React.FC = () => {
  return <p>Auth Error!</p>;
};

export const UnLoginPage: React.FC = () => {
  return (
    // TODO: link to login page
    <p>Please login to view more</p>
  );
};

interface ILoginCheck {
  pass: boolean;
}

export const LoginCheck: React.FC<ILoginCheck> = ({ pass, children }) => {
  return <>{pass ? children : <UnLoginPage />}</>;
};
