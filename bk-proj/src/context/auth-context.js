import React from "react";
import axios from "axios";

const AuthContext = React.createContext(null);
const { Provider } = AuthContext;

const AuthProvider = ({ children }) => {
  const [authState, setAuthState] = React.useState({
    token: null,
  });

  const setUserAuthInfo = ({ data }) => {
    const usertoken= JSON.stringify(data.data)
   
    localStorage.setItem("token",usertoken );
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
    const url="http://localhost:1337/api/users/me"
    var response= axios.get(url , 
      { headers: {"Authorization":`Bearer ${token}`}}).then(res=>{
        console.log(res.data);
      });
    if (token) {
      try {
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
