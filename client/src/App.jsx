import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Home } from "./pages/users";
import { PageNotFound } from "./pages/users";
import { Login, Register } from "./pages/auth";
import { Toaster } from "react-hot-toast"
import { useAuthContext } from "./context/AuthContext";


function App() {

  const { authUser } = useAuthContext()

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={authUser ? <Home /> : <Navigate to={"/login"} />} />
        <Route path="/login" element={authUser ? <Navigate to={"/"} /> : <Login />} />
        <Route path="/register" element={authUser ? <Navigate to={"/"} /> : <Register />} />
        <Route path="*" element={<PageNotFound/>} />
      </Routes>
      <Toaster />
    </BrowserRouter>
  )
}

export default App
