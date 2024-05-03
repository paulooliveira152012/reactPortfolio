import React from "react";
import Header from "../components/header";
import Projects from "../components/projects";
import estilo from "../styles/estilo.css"; //this is being applied!
import styles from "../styles/style";
import backgroundImage from "../images/background.jpeg"

function LandingPage() {
  return (
    <div>
      <main>
        <Header />
        <div style={styles.hero}>
          <p style={styles.heroLine}>
            Welcome to my portfolio! feel free to check out my work and get
            connected!
          </p>
        </div>

        <section>
          <Projects />
        </section>

        {/* my story */}
        <section>
          <p>
            Hello! I’m Paulo Oliveira, a 25-year-old web developer with a
            growing interest in mobile development. My passion lies in crafting
            beautiful and functional digital solutions that empower businesses
            and individuals to achieve their online goals.
          </p>
          <p>
            Though I might be an introvert, I thrive on connecting with people
            and leveraging technology to tackle challenges. My journey in tech
            began at Rutgers University's web development bootcamp, where I
            graduated in August 2022. Currently, I'm honing my skills as a
            software engineer intern at Grads, a company dedicated to enhancing
            the e-commerce ecosystem for college students, making their academic
            experiences more convenient. At Grads, I've had the opportunity to
            contribute to the website’s development and take on various personal
            projects. One of my standout projects was the redesign of the Grads
            landing page, which stands as a testament to my dedication and
            creativity.
          </p>
          <p>
            I hold honesty, hard work, and creativity as my core values, which
            guide me in building strong, enduring relationships with clients and
            consistently delivering exceptional work.
          </p>
          <p>
            Thank you for visiting my portfolio. I’m eager to explore how we can
            connect and collaborate!
          </p>
        </section>

        {/* image here */}
        <div>
            <img src={backgroundImage}></img>
        </div>

        <section>
          As a full-stack developer, I bring a comprehensive skill set to the
          table, covering both front-end and back-end aspects of web and mobile
          applications. My technical toolkit includes:
          <li>
            <p>
              Front-end Development: Skilled in HTML5, CSS, and JavaScript, with
              expertise in creating responsive designs using Bootstrap and
              dynamic user interfaces with React.
            </p>
          </li>
          <li>
            <p>
              Back-end Development: Experienced in constructing robust
              server-side applications using Node.js and Express, and proficient
              in managing databases with MongoDB.
            </p>
          </li>
          <li>
            <p>
              Mobile Development: Actively developing my capabilities in mobile
              app development with React Native, managing both the front-end and
              back-end elements of projects.
            </p>
          </li>
          <p>
            I take pride in using these technologies to develop polished,
            professional websites and applications. My portfolio includes a
            custom-built professional website and various other projects where I
            have demonstrated my ability to manage and execute complex projects
            efficiently.
          </p>
          <p>
            My role has expanded beyond traditional development into areas of
            project management. Although not formally trained, I have gained
            valuable perspective on managing projects by closely aligning with
            client needs—particularly when working directly under the startup
            founder at Grads. My responsibilities included overseeing the
            project's vision, ensuring the design accurately reflected the
            founder's vision, monitoring how the front-end brought this design
            to life, and coordinating how the backend should respond to the
            front-end's requirements.
          </p>
          <p>
            Currently, I am enriching my skill set by working as a tutor at The
            Coder School, where I teach coding to children using Scratch and
            Python. This role has been particularly rewarding, pushing me to
            quickly adapt and effectively communicate complex technical concepts
            to young learners.
          </p>
          <p>
            In addition to my development and teaching roles, I am dedicated to
            deepening my understanding of Python to integrate more automation
            and data-driven features into my future projects. This continuous
            learning underscores my commitment to staying at the forefront of
            technology and adapting to the ever-evolving digital landscape.
          </p>
        </section>
      </main>
      <footer>
        <p>© 2024 by [Your Name]. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default LandingPage;
