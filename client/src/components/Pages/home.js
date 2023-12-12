import React, { useState } from "react";
import Container from 'react-bootstrap/Container';


function Home(){

    const [time, setTime] = useState(0);

  function changeTime() {
    setTime(new Date().toLocaleTimeString());
  }
    return(
        <div className="home">
          <h1>Pedro Perez</h1>
        </div> 
    )
}

export default Home
