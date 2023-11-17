import React from "react";
import "./App.css";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Welcome from "./components/Welcome";
import { Routes, Route } from "react-router-dom";
import EmailLogin from "./components/EmailLogin";
import Main from "./components/Main";

function App() {
  return (
    <div className="">
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/emaillogin" element={<EmailLogin />} />
        <Route path="/main" element={<Main />} />
      </Routes>
    </div>
  );
}

export default App;
