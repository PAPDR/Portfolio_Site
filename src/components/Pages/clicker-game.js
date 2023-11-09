import React, { useState } from "react";
import Container from 'react-bootstrap/Container';
let current_points = 0

function ClickerGame(){
  
    const [points, setPoints] = useState(current_points);

  function addPoints(addition) {
    setPoints(points+addition);
    updatePoints(points)
  }

  function subPoints(subtraction){
    setPoints(points-subtraction);
    updatePoints(points)
  }

  function updatePoints(new_points){
    current_points = new_points;
  }

    return(
        <div className="home">
          <h1>{points}</h1>
          <button onClick={function() { addPoints(1); }}>CLICK!</button>
        </div> 
    )
}


export default ClickerGame