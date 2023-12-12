import React, { useState } from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';

//NAVBAR FUNCTION
export default function Navbar() {

  return ( 
  <nav className="nav">
    <a href="/" className="site-title">Pedro Perez</a>
    <ul>
      <li>
        <a href="/projects">Projects</a>
      </li>
      <li>
        <a href="/about">About</a>
      </li>
      <li>
        <a href="/notepad">NotePad</a>
      </li>
    </ul>
  </nav>
  )


}

  
  