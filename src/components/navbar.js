import React from "react";
import logo from "./pics/Shyfter-Logo-White-Right.png"

export default function Navbar() {

    function myFunction(x) {
        let divClass = document.getElementById("menu");
        let divDropdown = document.getElementById("navOptions");
        if(divClass.className === "container"){
            divClass.className="change";
            divDropdown.style.display = "flex";
        }else{
            divClass.className="container";
            divDropdown.style.display = "none";
        }
      }

    return (
        <>
            <div id='menu' class="container" onClick={()=>{myFunction(this)}}>
                <div class="bar1"></div>
                <div class="bar2"></div>
                <div class="bar3"></div>
            </div>
            <nav className="navbar">
                <div className="navOptions" id="navOptions">
                    <div className="Home"><a href="#home">Home</a></div>
                    <div className="Projects"><a href="#quizz-app">Quizz App</a></div>
                    <div className="Projects"><a href="#tenzies-app">Tenzies App</a></div>
                    <div className="CV"><a href="#cv-website">CV</a></div>
                    <div className="About"><a href="#contact">Contact</a></div>
                </div>
                <div className="logo">
                    <img src={logo} alt="Logo"></img>
                </div>
            </nav>
        </>
    )
}