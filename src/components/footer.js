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
                    <div className="contact-container" onClick={()=>{window.open('tel:+40720790861')}}>
                        <img src={phone} alt="icon"></img>
                        <p>Phone</p>
                    </div>
                </div>
                <div className="linkedin">
                    <div className="contact-container" onClick={()=>{window.open('https://www.linkedin.com/in/tintaru-andrei-84697a185')}}>
                        <img src={linkedin} alt="icon"></img>
                        <p>LinkedIn</p>
                    </div>
                </div>
                <div className="email">
                    <div className="contact-container" onClick={()=>{window.open('mailto:tantruandrei8@gmail.com')}}>
                        <img src={email} alt="icon"></img>
                        <p>Email</p>
                    </div>
                </div>
                <div className="instagram">
                    <div className="contact-container" onClick={()=>{window.open('https://www.instagram.com/andrei_a.t/')}}>
                        <img src={instagram} alt="icon"></img>
                        <p>Instagram</p>
                    </div>
                </div>
                <div className="whatsapp">
                    <div className="contact-container" onClick={()=>{window.open('https://wa.me/40720790861')}}>
                        <img src={whatsapp} alt="icon"></img>
                        <p>Whatsapp</p>
                    </div>
                </div>
                <div className="Telegram">
                    <div className="contact-container" onClick={()=>{window.open('https://t.me/Shyfter')}}>
                        <img src={telegram} alt="icon"></img>
                        <p>Telegram</p>
                    </div>
                </div>
            </div>
        </footer>
    )
}