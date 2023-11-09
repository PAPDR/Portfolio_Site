//REACT IMPORTS
import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate
} from "react-router-dom";

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';import project_list from "./components/comps/project_list";


//COMPONENTS IMPORTS
import Navbar from "./components/navbar";
import Home from "./components/Pages/home";
import About from "./components/Pages/about";
import ClickerGame from "./components/Pages/clicker-game";
import Footer from "./components/footer"
import Projects from "./components/Pages/projects";

/*
NOTE: USING ROUTERS REMOVES THE CSS STYLING
          <Route path="/project" element={<Projects />} />
          <Route path="/about" element={<About />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="*" element={<Navigate to="/"/>} />

*/

function App() {
  return (


      <div>
          <Navbar />
          <div className= "site-body">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/clicker-game" element={<ClickerGame />} />
              <Route path="*" element={<Navigate to="/"/>} />
            </Routes>
          </div>
          <Footer />
      </div>

  );
}

export default App;
