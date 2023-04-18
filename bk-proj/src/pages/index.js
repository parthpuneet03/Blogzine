import { BrowserRouter, Routes, Route, Switch } from "react-router-dom";
import Home1 from "./home";
import { useRouter } from "next/router";
import React from "react";
import { AuthContext, AuthProvider } from "@/context/auth-context";

export default function Home() {
  const authContext = React.useContext(AuthContext);
  const router = useRouter();

  React.useEffect(() => {
    // checks if the user is authenticated
    console.log(authContext)
    authContext.isUserAuthenticated()
      ? router.push("/")
      : router.push("/signup");
  }, []);

  return (
    <AuthProvider>
      <Home1></Home1>
    </AuthProvider>
  );
}
