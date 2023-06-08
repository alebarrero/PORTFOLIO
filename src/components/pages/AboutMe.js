import React from 'react';
import ProfilePic from '../../assets/images/profilepic.jpg'

// Renders entire About Me page
export default function About() {
    return (
        <div className="container-fluid">
            <div className="container row">

        <div className= "col-md-4">
            <img src={ProfilePic}
                 alt="Alejandra's Profile"
                 id ="about-me"
                 className="d-block mx-lg-auto img-fluid"></img>
        </div>
        
        <div className= "col-md-8">
            <div className="card">
                <div className="card-body h-100">
                    <div className="lead">
                    <ul>
                    <li className="listspace">Fluent in HTML, CSS, JavaScript, mySQL, MongoDB, Express, React, and Node. Versatile Full-stack Web Developer in the city of Miami. Born and raised in Bogota, Colombia.
                    </li>
                    <li className="listspace">Amongst my love for coding, I also find enjoyment in other activities such as but not limited to yoga, swimming and pottery.</li>
                    <li className="listspace">When I'm not immersed in the world of coding, I like to read books that observe and analyze human behavior. Travelling and taking film pictures of my friends when travelling.</li>
                    <li className="listspace">Graduate of the <span className="um">University of Miami</span> Coding Bootcamp.</li>
                    </ul>
                    </div>
                </div>
            </div>
        </div>

        </div>
        </div>
            
            
    )

}