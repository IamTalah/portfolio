import "./AboutContentStyles.css";

import React from 'react';
import { Link } from "react-router-dom";
import React2 from "../assets/react1.jpg";
import React1 from "../assets/react2.webp";
import Myself from "../assets/myself.png";

const AboutContent = () => {
  return (
    <div className="about">
        <div className="left"> 
            <h1>Who Am I?</h1>
            <img className="myself-img" src={Myself} alt="Myself" />
            <p>"A skilled and experienced ICT professional with a solid background in software development,
                database management, networking and info security, and project management. Proficient in a
                variety of programming languages, including HTML5, Tailwind CSS, JavaScript, React JS, and C++.
                Working knowledge in Network designing, Installation, and management. Demonstrated ability
                to lead and motivate cross-functional teams to achieve project goals and deliver high-quality
                results. Seeking a challenging and rewarding role in a dynamic organization where I can utilize
                my skills and expertise to drive business success."</p>
            <Link to="/contact">
                <button className="btn">Contact</button>
            </Link>
        </div>
        <div className="right">

        <h1>My Skills</h1>
            <p>
            • Comfortable in the use of Windows, Linux, and iOS operating systems. <br />
            • Working knowledge of the most popular Database Management systems such as SQL Server, MySQL, Microsoft Access and Oracle.<br />
            • Working knowledge in system development and software engineering. <br />
            • Knowledge with data extraction, transformation, and loading. <br />
            • Working knowledge in network administration and management. <br />
            • Working knowledge in network installation, configuration, and maintenance. <br />
            • Excellent knowledge of web development technologies such as: HTML5, CSS3, JavaScript, PHP.<br />
            • Knowledge in C++ programming language. <br />
            • Comfortable in the use of Windows and Microsoft packages such as MS Access, MS Office, MS Excel, Power point and MS Word. <br />
            • Excellent written and verbal communication and presentation skills.<br />
            • Strong team player, and team leadership.<br />
            • Excellent skills in management and administration.<br />
            • Risk analysis and management. <br />
            • Client relationship. <br />
            • Issue resolution. <br />
            </p>
            <br /><br />
            <h1>My Qualifications</h1>
            <p>
            • BSc in Information and Communication Technology with Upper Second Class From Mzuzu University. <br />
            • Advanced Diploma in IT Support Provision with Credit From Malawi Polytechnic Continuing Education Centre. <br />
            • Certificate in Arduino programming and design thinking from Status Tech Hub in partner with Mzuzu University. <br />
            </p>
        </div>
    </div>
  )
}

export default AboutContent;

<div className="img-container">
<div className="img-stack top">
    <img src={React1} className="img" alt="true" />
</div>
<div className="img-stack bottom">
    <img src={React2} className="img" alt="true" />
</div>
</div>