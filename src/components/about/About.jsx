import React from "react";
import "./about.scss";

const About = () => {
  return (
    <div className="about">
      <div className="header">
        <h1>About</h1>
      </div>
      <div className="wrapper">
        <div className="info">
          <h2>Education</h2>
          <p>
            I graduated from the University of California, Los Angeles (UCLA)
            with a B.S. in Computer Science and a B.S. in Applied Mathematics,
            with a specialization in Statistics & Economics.
          </p>
          <h3>Coursework:</h3>
          <div className="coursewrapper">
            <ul>
              <li>OOP (C++, Python)</li>
              <li>Data Science (R, Python)</li>
              <li>Algorithms</li>
              <li>Machine Learning (TensorFlow & PyTorch)</li>
              <li>Data Management Systems</li>
            </ul>
            <ul>
              <li>Network Programming</li>
              <li>Web Applications</li>
              <li>Linear & Non-linear Systems</li>
              <li>Discrete Structures</li>
              <li>Complex Analysis</li>
            </ul>
            <ul>
              <li>Mathematical Modeling</li>
              <li>Differential Equations</li>
              <li>Options Pricing</li>
              <li>Graph Theory</li>
              <li>Number Theory</li>
            </ul>
          </div>

          <h2>Technical Skills</h2>
          <ul>
            <li>
              Proficient in C/C++, Python, R, Java, JavaScript (React, Node.js),
              Linux, Git, MatLab, SQL, NoSQL, scikit-learn, PyTorch, TensorFlow
            </li>
            <li>
              Experienced with Big Data technologies (Hadoop, Spark), Cloud
              Services (AWS, Azure), RESTful APIs, Containerization (Docker),
              CI/CD pipelines, and Agile development methodologies
            </li>
          </ul>

          <h2>Leadership & Engagement</h2>
          <ul>
            <li>President of EuroBruins, fostering global connectivity</li>
            <li>
              Senior Consultant at Consult Your Community, driving tech startup
              growth
            </li>
            <li>
              Technical Analysis Director at Bruin Investment & Trading Group,
              establishing analytical training programs
            </li>
          </ul>
        </div>
        <div className="uclaImages">
          <img src="/ucla.jpeg" alt="" />
        </div>
      </div>
    </div>
  );
};

export default About;
