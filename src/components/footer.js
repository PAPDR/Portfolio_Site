import React, { useState } from "react";
import Container from 'react-bootstrap/Container';


function Footer(){
    return(
        <div className="footer">
            <a href="/" className="site-title">PAPDR</a>
            <ul>
                <li>
                    <a href="/projects">GitHub</a>
                </li>
                <li>
                    <a href="/about">LinkedIN</a>
                </li>
                <li>
                    <a href="/clicker-game">Itch.io</a>
                </li>
            </ul>

            <div className="below_footer">
                <p>
                    @{new Date().getFullYear()} Pedro Perez. All Rights reserved.
                </p>
            </div>
        </div>
    )
}

export default Footer