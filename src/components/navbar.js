import React from "react";
import logo from "./pics/Shyfter-Logo-White-Right.png"

export default function Navbar() {


    return (
        <nav className="navbar">
            <div className="navOptions">
                <div className="Home"><a href="#home">Home</a></div>
                <div className="Projects"><a href="#quizz-app">Quizz App</a></div>
                <div className="Projects"><a href="#tenzies-app">Tenzies App</a></div>
                <div className="CV"><a href="#cv-website">CV</a></div>
                <div className="About" onClick={()=>{alert("Ai prea mult timp liber....")}}>About</div>
            </div>
            <div className="logo">
                <img src={logo} alt="Logo"></img>
            </div>
        </nav>
    )
}