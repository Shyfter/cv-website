import React from "react";
import email from "./pics/email.png";
import instagram from "./pics/instagram.png";
import linkedin from "./pics/linkedin.png";
import phone from "./pics/phone.png";
import whatsapp from "./pics/whatsapp.png";
import telegram from "./pics/telegram.png";

export default function Footer(){
    return (
        <footer id="contact">
            <h2 className="contact-title">Contact</h2>
            <div className="footer">
                <div className="phone">
                    <div className="contact-container">
                        <img src={phone} alt="icon"></img>
                        <p>Phone</p>
                    </div>
                </div>
                <div className="linkedin">
                    <div className="contact-container">
                        <img src={linkedin} alt="icon"></img>
                        <p>LinkedIn</p>
                    </div>
                </div>
                <div className="email">
                    <div className="contact-container">
                        <img src={email} alt="icon"></img>
                        <p>Email</p>
                    </div>
                </div>
                <div className="instagram">
                    <div className="contact-container">
                        <img src={instagram} alt="icon"></img>
                        <p>Instagram</p>
                    </div>
                </div>
                <div className="whatsapp">
                    <div className="contact-container">
                        <img src={whatsapp} alt="icon"></img>
                        <p>Whatsapp</p>
                    </div>
                </div>
                <div className="Telegram">
                    <div className="contact-container">
                        <img src={telegram} alt="icon"></img>
                        <p>Telegram</p>
                    </div>
                </div>
            </div>
        </footer>
    )
}