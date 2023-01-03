import "./FooterStyles.css";

import React from 'react';
import { Link } from "react-router-dom";
import { FaHome, FaPhone, FaMailBulk, FaDiscord, FaTelegram, FaWhatsapp, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-container">
            <div className="left">
                <div className="location">
                    <FaHome size={20} style={{ color:"#fff", marginRight: "2rem"}} />
                    <div>
                        <p>Matawale, Zomba</p>
                        <p>Malawi.</p>
                    </div>
                </div>
                <div className="phone">
                    <h4><FaPhone size={20} style={{ color:"#fff", marginRight: "2rem"}} />
                    +265 993 831 868 | +265 886 259 204</h4>
                </div>
                <div className="email">
                    <h4><FaMailBulk size={20} style={{ color:"#fff", marginRight: "2rem"}} />
                    victalah@gmail.com</h4>
                </div>
            </div>
            <div className="right">
                <h4>About Victor</h4>
                <p>"Junior Network Engineer | Junior Software Engineer | Senior Front-End Web Developer | Senior IOT System Developer | Junior Database Engineer".</p>
                <div className="social">
                
                <a href="https://www.linkedin.com/in/victor-mbewe-33a0a8176">
                    <FaLinkedin size={30} style={{ color:"#fff", marginRight: "1rem"}} />
                </a>
                <a href="https://wa.me/message/4NMPD3EGKWEYJ1">
                    <FaWhatsapp size={30} style={{ color:"#fff", marginRight: "1rem"}} />
                </a>
                <a href="https://discordapp.com/users/IamTalah#5398">
                    <FaDiscord size={30} style={{ color:"#fff", marginRight: "1rem"}} />
                </a> 
                <a href="https://t.me/IamTalah">
                    <FaTelegram size={30} style={{ color:"#fff", marginRight: "1rem"}} />
                </a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer