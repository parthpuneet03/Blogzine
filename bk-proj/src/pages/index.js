import { BrowserRouter, Routes, Route, Switch, useLocation } from "react-router-dom";
import Home1 from "./home";
import { useRouter } from "next/router";
import React from "react";
import { AuthContext, AuthProvider } from "@/context/auth-context";

export default function Home() {
  const authContext = React.useContext(AuthContext);
  const router = useRouter();

  React.useEffect(() => {
    // checks if the user is authenticated
    const isUserAuthenticated = authContext.isUserAuthenticated();
      if(isUserAuthenticated ){
        console.log(isUserAuthenticated)
        router.push("/")
       } 
       else{
        console.log("user not authenticated")
        router.push("/signin");
}}, []);
  
  return (
      <Home1></Home1>
  );
}
