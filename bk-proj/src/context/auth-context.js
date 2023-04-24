import React from "react";
import jwt_decode from "jwt-decode";

const AuthContext = React.createContext(null);
const { Provider } = AuthContext;

const AuthProvider = ({ children }) => {
  const [authState, setAuthState] = React.useState({
    token: null,
  });

  const setUserAuthInfo = ({ data }) => {
    localStorage.setItem("token", JSON.stringify(data.data));
    const token = localStorage.getItem("token");
    var userData = data.data;
    setAuthState({
      userData,
      token,
    });
  };

  const isUserAuthenticated = () => {
    const token = localStorage.getItem("token");
    console.log(token);
    if (token) {
      try {
        var decoded = jwt_decode(JSON.parse(token));
        console.log(decoded);
        return true;
      } catch (err) {
        console.log(err);
        return false;
      }
    } else {
      return false;
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
