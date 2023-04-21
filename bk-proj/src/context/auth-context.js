import React from "react";
import { useRouter } from "next/router";
const AuthContext = React.createContext(null);
const { Provider } = AuthContext;

const AuthProvider = ({ children }) => {
  
  const [authState, setAuthState] = React.useState({
    token: "",
  });

  const setUserAuthInfo = ({ data }) => {
    localStorage.setItem("token", data.data);
    const token = localStorage.getItem("token");
    setAuthState({
     token,
    });
  };

  // checks if the user is authenticated or not
  const isUserAuthenticated = () => 
  {
    console.log(authState.token)
    const token = localStorage.getItem("token");
    setAuthState({
      token,
     });
    if (!authState.token) {
    return false;
  }
  else
  {
    return true;
  }
 };

  return (
    <Provider
      value={{
        setAuthState: (userAuthInfo) => setUserAuthInfo(userAuthInfo),
        isUserAuthenticated,
      }}
    >
      {children}
    </Provider>
  );
};
export { AuthContext, AuthProvider };
