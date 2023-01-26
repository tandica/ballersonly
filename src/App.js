// import logo from "./logo.svg";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./styles/App.css";
// import Nav from "./components/Nav";
import Home from "./pages/Home";

function App() {
  return (
    // <div>
    //   <Nav></Nav>
    // </div>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
