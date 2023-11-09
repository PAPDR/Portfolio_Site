import React from "react";
import '../assets/images/GameJam.png';


function Card2(project) {
  return (
    <div className="card">
      
      <div className="card-img">
        <img src={require("../assets/images/GameJam.png")}  alt="Game Screenshot" />
      </div>

      <div className="card-text">
        <p> {project.desc}</p>
      </div>

    </div>
  );
}

export default Card2;