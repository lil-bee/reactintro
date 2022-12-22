import React from "react";
import reactLogo from '../../assets/react.svg'
import './Navbar.css'

export default function Navbar(){
    return (
        <nav>
            <img src={reactLogo}  alt="React logo" />
            <h3>ReactFacts</h3>

            <h4>React Course - Project 1</h4>
        </nav>
    )
}