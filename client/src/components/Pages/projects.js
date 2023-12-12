import React, { useState } from "react";
import Container from 'react-bootstrap/Container';
import Card from "../comps/card";
import Card2 from "../comps/card2";
import project_list from "../comps/project_list";


function Projects(){
    return(
        <div>
            <Card imgURL ={project_list[0].img} 
                  desc = {project_list[0].desc}/>
            <Card2 imgURL ={project_list[1].img} 
                  desc = {project_list[1].desc}/>
        </div>

    )
}


export default Projects