import React, { useState } from "react";
import Container from 'react-bootstrap/Container';

function About(){


    return(
        <div className="about">
          <div className="about-title">
            <h1> About Me</h1>
          </div>
          <div className="about-body">
            <p>I am Pedro Perez, a Columbia Engineering student studying computer science. My primary focus has been in Computer Vision
              and Computer Graphics. I have an interest in game development as well as AI.
            </p>
          </div>
        </div> 
    )
}

export default About