import React from "react";
import image from "./pics/profileImg.jpg";
import quizzAppPC from "./pics/quizz-app-pc.png";
import quizzAppPhone from "./pics/quizz-app-phone.png"
import tenziesAppPC from "./pics/tenzies-app-pc.png";
import cvWebsite from "./pics/cv-website.png";

export default function MainContent() {
    return (
        <div className="topSection" id="home">
            <div className="profileSection">
                <img className="profileImg" alt="profilePicture" src={image}></img>
            </div>
            <div className="profileDescription">
            My name is Andrei and I’m passionate about creating beautiful and
             user-friendly web experiences. As a front-end developer,
              I specialize in crafting the visible part of websites
               and applications using web technologies like JavaScript,
                HTML, and CSS.
            </div>
            

            {/* Quizz App Section*/}
            <div id="quizz-app"></div>
            <div className="quizz-app">
                <div className="quizz-app-pics-container" onClick={()=>{window.open("https://quizz-app-shyfter.netlify.app/")}}>
                    <div className="quizz-app-pc">
                        <img src={quizzAppPC} alt="Quizz-app"></img>
                    </div>
                    <div className="quizz-app-phone">
                        <img src={quizzAppPhone} alt="quizz-app-phone"></img>
                    </div>
                </div>
                <div className="quizz-app-pc-text">
                    <p>
                    QuizMaster is a user-friendly quiz application that puts your knowledge to the test! <br></br>
                    Whether you’re a trivia enthusiast or just looking to challenge yourself, QuizzApp has got you covered.<br></br>
                    Choose from a wide range of topics and select your preferred difficulty level.<br></br>
                    The questions adapt to your chosen level, ensuring an appropriate challenge.<br></br>
                    Each quiz consists of 5 thought-provoking questions.<br></br>
                    Enjoy a clean and intuitive interface that makes navigation a breeze.<br></br>
                    Responsive design ensures a seamless experience across devices.
                    </p>
                </div>
            </div>


            {/* Tenzies App Section*/}
            <div id="tenzies-app"></div>
            <div className="tenzies-app">
                <div className="tenzies-app-pics-container" onClick={()=>{window.open("https://tenzies-shyfter.netlify.app/")}}>
                    <div className="tenzies-app-pc">
                        <img src={tenziesAppPC} alt="tenzies-app"></img>
                    </div>
                </div>
                <div className="tenzies-app-pc-text">
                    <p>
                        Tenzies is an exciting dice game that combines luck, 
                        strategy, and quick thinking. Whether you're playing 
                        solo or with friends. <br></br>
                        Here are the key features:<br></br>
                        - Each player starts with ten six-sided dice.<br></br>
                        - The goal is to roll all dice to match a specific pattern (e.g., all ones, all twos, etc.).<br></br>
                        - Tenzies is perfect for gatherings, parties, or casual game nights.<br></br>
                        - Challenge your opponents, strategize, and enjoy the thrill of rolling those dice!<br></br>

                        Remember, luck favors the swift in Tenzies. Roll those dice and aim for perfection! 🎲🏆
                    </p>
                </div>
            </div>

            {/* CV Website Section*/}
            <div id="cv-website"></div>
            <div className="cv-website">
                <div className="cv-website-pics-container" onClick={()=>{window.open("https://shyfter.github.io/CV/")}}>
                    <div className="cv-website-pc">
                        <img src={cvWebsite} alt="cv-website"></img>
                    </div>
                </div>
                <div className="cv-website-pc-text">
                    <p>
                        This is a webproject that mirrors my Curriculum 
                        Vitae (CV) in a digital format. <br></br>
                        The website faithfully replicates the structure 
                        of a CV, maintaining sections such as “About Me,” 
                        “Education,” “Work Experience,” and more.<br></br>
                        Clean typography, well-organized content, and a 
                        balanced layout ensure readability and visual appeal.
                    </p>
                </div>
            </div>
        </div>
    )
}