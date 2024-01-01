import React from 'react';
import "./index.css";
import Home from "./routes/Home";
import About from "./routes/About";
import Project from "./routes/Project";
import Contact from "./routes/Contact";
import { Route, Routes } from "react-router-dom";
import "./fonts/PPNeueMontreal-Bold.otf";
import "./fonts/PPNeueMontreal-Book.otf";
import "./fonts/PPNeueMontreal-Italic.otf";
import "./fonts/PPNeueMontreal-Medium.otf";
import "./fonts/PPNeueMontreal-SemiBolditalic.otf";
import "./fonts/PPNeueMontreal-Thin.otf";

function App() {
  return (
    <>
      <Routes>
        <Route path="/portfolio" element={<Home />}/>
        <Route path="/portfolio/about" element={<About />}/>
        <Route path="/portfolio/project" element={<Project />}/>
        <Route path="/portfolio/contact" element={<Contact />}/>
      </Routes>
    </>
  );
}

export default App;
