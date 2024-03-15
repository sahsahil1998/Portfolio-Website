import React from 'react';
import '../../css/about.css';

const AboutPage = () => {
  return (
    <main>
      <h1 id="about-header">About Me</h1>
      <div className="main-content">
        <img src="https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExM3Q2MWI0d3E3a3hjN3o5NXZuY3l6a2ttbjU0Z2N3YTk3MHI3dHVyaiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/qgQUggAC3Pfv687qPC/giphy.gif" alt="Coding" className="top-image" />
        <div className="columns">
          <div className="contact-education">
            <p><strong>Email:</strong> <a href="mailto:sahsahil1997@gmail.com">sahsahil1997@gmail.com</a></p>
            <p><strong>Phone:</strong> <a href="tel:+15732304024">573-230-4024</a></p>
            <h3>Education:</h3>
            <ul className="education-list">
              <li>Master of Science in Computer Science - Northeastern University</li>
              <li>Bachelor of Science in Biology - University of Missouri-Columbia</li>
            </ul>
            <a href="/assets/Sahil Sah Resume.pdf" target="_blank" className="resume-button">View or Download My Current Resume!</a>
          </div>
          <div className="about-text">
            <section id="about">
              <p>Welcome to my portfolio! I'm Sahil Sah, a dynamic professional with a passion for technology and a unique background that spans from biology and healthcare to the vibrant world of computer science.</p>
              <p>My journey began with a Bachelor's in Biology from the University of Missouri – Columbia, leading me to a role as a Genetic Quality Analyst at Bayer. There, I refined my skills in data analysis and process optimization, ensuring the highest standards in genetic testing.</p>
              <p>Driven by a curiosity for the intersection of science and technology, I pursued a Master's in Computer Science at Northeastern University. This decision marked a pivotal shift in my career, immersing me in a world where I could blend my analytical skills with my passion for technology.</p>
              <p>As a Full Stack Software Engineer at DomumGym, I've found my calling. Leading the development of key platform features and collaborating with cross-functional teams, I've embraced agile methodologies to deliver scalable solutions that enhance user experiences.</p>
              <p>Beyond the world of coding and technology, I have a zest for life that takes me outdoors and into various activities. When I'm not learning new technical skills or honing my craft, I enjoy working out, playing sports—particularly tennis—and diving into video games with friends. These activities not only keep me physically and mentally sharp but also fuel my creativity and drive in my professional endeavors.</p>
              <p>My journey is a testament to the power of adaptability, continuous learning, and the pursuit of passion. It reflects my dedication to not just embracing change, but actively seeking it out to drive innovation.</p>
              <p>In this portfolio, you'll discover a collection of projects that showcase my journey and my commitment to pushing boundaries. I invite you to explore, connect, and join me on this exciting journey of continuous growth and discovery.</p>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
};

export default AboutPage;