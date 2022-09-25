import { useState } from "react";
import { Link, Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import { Home } from "./pages/Home";
import { Login } from "./pages/Login";
import { SignedInPage } from "./pages/SignedInPage";



function App() {
  const [user, setUser] = useState(null);
  return (
    <div className="App">
      
      <Routes>
        <Route index element={<Navigate to="/home" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signin" element={<SignedInPage />} />
      </Routes>
    </div>
  );
}

export default App;
