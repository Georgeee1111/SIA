import React from "react";
import { Navigate } from "react-router-dom";
import Home from "../homepage/Home.jsx";
import Login from "../loginpage/Login.jsx";
import Signup from "../signuppage/Signup.jsx";

export const homeRoutes = [
  { path: "/", element: <Navigate to="/home" /> },
  { path: "/home", element: <Home /> },
  { path: "/login", element: <Login /> },
  { path: "/SignUp", element: <Signup /> },
];
