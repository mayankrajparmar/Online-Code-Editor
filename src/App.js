import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Landing from "./components/Landing";
import Home from "./components/Home";
import Contact from "./components/Contact";
import Notes from "./components/Notes";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/landing" element={<Landing />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/notes" element={<Notes />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
