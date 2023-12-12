import React from "react";
import '../assets/images/Raytracer_Reflections.png';


function Card(project) {
  return (
    <div className="card">
      
      <div className="card-img">
        <img src={require("../assets/images/Raytracer_Reflections.png")}  alt="Raytracer Output" />
      </div>

      <div className="card-text">
        <p> {project.desc}</p>
      </div>

    </div>
  );
}

export default Card;