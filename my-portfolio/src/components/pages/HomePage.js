import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import profilePicture from '../../images/Portfolio Profile Image.png';
import '../../css/home.css';

function Home() {
  return (
    <div className="home-page-container">
      <main>
        <section id="home">
          <div className="text-and-links">
            <h1>Sahil Sah</h1>
            <p>Full Stack Software Developer</p>
            <div className="social-links">
              <a href="https://github.com/sahsahil1998" target="_blank" rel="noopener noreferrer" aria-label="Visit my GitHub profile">
                <FontAwesomeIcon icon={faGithub} />
              </a>
              <a href="https://www.linkedin.com/in/sahil-sah" target="_blank" rel="noopener noreferrer" aria-label="Visit my LinkedIn profile">
                <FontAwesomeIcon icon={faLinkedinIn} />
              </a>
            </div>
          </div>
          <img src={profilePicture} alt="Sahil Sah" className="profile-picture" />
        </section>
      </main>
    </div>
  );
}

export default Home;