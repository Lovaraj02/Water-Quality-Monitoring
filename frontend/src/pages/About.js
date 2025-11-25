import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";

const developers = [
  {
    name: "Jaya Lova Raju",
    image: "images/raj.jpeg",
    description: "Student at Jawaharlal Nehru Technological University",
    socialMedia: {
      linkedin: "https://www.linkedin.com/in/lovaraj02/",
      github: "https://github.com/Lovaraj02",
    },
  },
  {
    name: "Padala Ganesh",
    image: "images/ganesh.jpeg",
    description: "Student at Jawaharlal Nehru Technological University",
    socialMedia: {
      linkedin: "https://www.linkedin.com/in/ganesh-padala-/",
      github: "https://github.com/padala-ganesh",
    },
  },
];

export default function About() {
  return (
    <div className="about-page">
      <div className="about-container">
        <h1 className="about-title">About Us</h1>

        <div className="about-content">
          <p>
            Welcome to the Water Quality Management (WQM) platform! Our mission
            is to raise awareness about the importance of clean water and
            promote sustainable practices for managing water resources.
          </p>
          <p>
            At WQM, we believe that access to clean water is a fundamental human
            right. We work towards ensuring that everyone has access to safe and
            clean drinking water, as well as proper sanitation facilities.
          </p>
          <p>
            Our platform provides information about water quality, common water
            pollutants, and ways to protect water resources.
          </p>
          <p>
            We are committed to taking complaints and addressing water quality
            issues promptly. If you have any concerns or complaints about water
            quality in your area, please reach out to us.
          </p>
          <p>
            Thank you for joining us in our mission to promote clean water and
            sustainable development!
          </p>
        </div>

        <h2 className="about-title">Our Team</h2>

        <div className="developer-container">
          {developers.map((dev, idx) => (
            <div className="developer-card" key={idx}>
              <img src={dev.image} alt={dev.name} className="developer-image" />

              <div className="developer-name">{dev.name}</div>
              <div className="developer-description">{dev.description}</div>

              <div className="developer-social">
                <a href={dev.socialMedia.linkedin} target="_blank" rel="noreferrer">
                  <i className="fab fa-linkedin"></i>
                </a>
                <a href={dev.socialMedia.github} target="_blank" rel="noreferrer">
                  <i className="fab fa-github"></i>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
