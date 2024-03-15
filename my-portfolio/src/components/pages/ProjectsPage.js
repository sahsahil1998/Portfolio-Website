import React from 'react';
import '../../css/projects.css';

const ProjectsPage = () => {
  return (
    <div className="projects-page-container">
      <main>
        <section id="projects">
          <h1>My Projects</h1>
          <div className="projects-grid">
            {/* Project 1 */}
            <div className="project-card">
              <img src="../images/out-and-about-app.png" alt="Out and About App" />
              <h2>Out and About App</h2>
              <p>Co-developed an Android application for outdoor activity planning, integrating Google Maps API for real-time location tracking and route planning. Focused on user-friendly interfaces and efficient navigation.</p>
              <ul className="technologies-used">
                <li>Android SDK</li>
                <li>Google Maps API</li>
                <li>Firebase</li>
                <li>Java</li>
              </ul>
              <div className="project-links">
                <a href="https://www.youtube.com/watch?v=VtPKXjEuSx0&feature=youtu.be" target="_blank" rel="noopener noreferrer">Video Demo</a>
                <a href="https://github.com/sahsahil1998/Out-and-About-App" target="_blank" rel="noopener noreferrer">Source Code</a>
              </div>
            </div>
            {/* Project 2 */}
            <div className="project-card">
              <img src="../images/stack-overflow.PNG" alt="Stack Overflow Imitation Web App" />
              <h2>Stack Overflow Imitation Web App</h2>
              <p>Lead the development of a full-stack web application modeled after Stack Overflow, using React.js for the front-end and Node.js/Express with MongoDB for the back-end. Emphasized RESTful API integration and collaborative development.</p>
              <ul className="technologies-used">
                <li>React.js</li>
                <li>Express</li>
                <li>MongoDB</li>
                <li>Node.js</li>
                <li>Git</li>
              </ul>
              <div className="project-links">
                <a href="https://github.com/sahsahil1998/Fake-Stack-Overflow-Project" target="_blank" rel="noopener noreferrer">Source Code</a>
              </div>
            </div>
            {/* Project 3 */}
            <div className="project-card">
              <img src="../images/pubmed-database.png" alt="PubMed Article Database" />
              <h2>PubMed Article Database and Data Mining</h2>
              <p>Developed a relational MySQL database on AWS for managing PubMed article data, processed with R. Implemented an Analytical Data Warehouse with a Star Schema for optimized data analysis.</p>
              <ul className="technologies-used">
                <li>MySQL</li>
                <li>AWS</li>
                <li>R</li>
              </ul>
              <div className="project-links">
                <a href="https://github.com/sahsahil1998/Mine-a-Database" target="_blank" rel="noopener noreferrer">Source Code</a>
              </div>
            </div>
            {/* Project 4 */}
            <div className="project-card">
              <img src="../images/bird-strike-database.png" alt="Bird Strike Database" />
              <h2>Bird Strike Database</h2>
              <p>Initiated a MySQL database project on AWS to analyze FAA bird strike data. Utilized R for data processing and advanced SQL queries for insight extraction.</p>
              <ul className="technologies-used">
                <li>MySQL</li>
                <li>AWS</li>
                <li>R</li>
              </ul>
              <div className="project-links">
                <a href="https://github.com/sahsahil1998/Design-Implement-a-RD" target="_blank" rel="noopener noreferrer">Source Code</a>
              </div>
            </div>
            {/* Project 5 */}
            <div className="project-card">
              <img src="../images/web-crawler-project.png" alt="Web Crawler Project" />
              <h2>Web Crawler Project</h2>
              <p>Developed a Python web crawler for a simulated social networking site, focusing on HTTP protocol intricacies, session tracking, and ethical crawling practices.</p>
              <ul className="technologies-used">
                <li>Python</li>
                <li>HTTP</li>
              </ul>
              <div className="project-links">
                <a href="https://github.com/sahsahil1998/Web-Crawler/tree/main/Project%202" target="_blank" rel="noopener noreferrer">Source Code</a>
              </div>
            </div>
            {/* Project 6 */}
            <div className="project-card">
              <img src="../images/mastermind-game.png" alt="Mastermind Game" />
              <h2>Mastermind Game</h2>
              <p>Created a single-player adaptation of Mastermind with Python, focusing on clean OOP practices and a user-friendly graphical interface using the Turtle graphics library.</p>
              <ul className="technologies-used">
                <li>Python</li>
                <li>Turtle</li>
              </ul>
              <div className="project-links">
                <a href="https://github.com/sahsahil1998/Mastermind" target="_blank" rel="noopener noreferrer">Source Code</a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default ProjectsPage;