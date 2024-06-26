import React from "react";
// import projectImagePlaceholder from "../images/projectPlaceholder.jpeg";
import styles from "../styles/style";
// import images
// import gradsapp from "../images/projectsScreenshot/gradsapp.png";
// import gradsweb from "../images/projectsScreenshot/gradsweb.png";
// import launion from "../images/projectsScreenshot/launion.jpeg";
// link estilos
import estilo from "../styles/estilo.css";

const Projects = () => {
  return (
    <div style={estilo}>
      <h2 style={styles.h2}>Projects:</h2>
      <div className="projectsContainer" style={styles.projectsContainer}>
        {/* container to use 100 vh */}

 
        {/* La Union*/}
        <div style={styles.projectContainer} className="projectContainer">
          <a
            href="https://paulooliveira152012.github.io/launiontireinc/"
            target="_blank"
            rel="noreferrer"
            style={styles.aProjects}
          >
            <div className="imageContainer laUnionImg"></div>
            {/* <img src={launion} alt="laUnion tire shop" style={styles.projectImg}></img> */}
            <div style={styles.projectParagraph}>
              <div>
                <p>
                  <strong>La Union Tire Inc.</strong>
                </p>
                <br />
                <p>
                  La Union Tire Inc. is a tire shop with a landing page built
                  using HTML, JavaScript, and CSS. It provides essential
                  information about services and invites visitors to explore
                  further.
                </p>
                <br />
                {/* <ul>
                        <li>
                          <strong>Responsive Layout:</strong> With a Bootstrap framework,
                          the website adapts seamlessly across devices, offering a
                          consistent experience on both desktop and mobile.
                        </li>
                        <li>
                          <strong>Clear Feature Showcase:</strong> Sections dedicated to
                          each core feature, like peer connections, study groups, tutoring
                          services, and the student marketplace, provide an in-depth
                          overview.
                        </li>
                        <li>
                          <strong>Compelling Visuals:</strong> CSS and jQuery animations
                          deliver a polished, modern look to capture visitors' attention
                          and hold their interest.
                        </li>
                        <li>
                          <strong>Download Links:</strong> Prominent buttons direct
                          visitors to the App Store and Google Play for easy access to the
                          Grads app.
                        </li>
                      </ul>
                      <p>
                        The Grads app website offers a compelling showcase that invites
                        students to explore and discover the value of Grads, driving them
                        to download and engage with the app.
                      </p> */}
              </div>
            </div>
          </a>
        </div>

        <div style={styles.projectContainer}>
          <a
            href="https://paulooliveira152012.github.io/weather/"
            target="_blank"
            rel="noreferrer"
            style={styles.aProjects}
          >
            <div className="imageContainer weatherApp"></div>
            <div style={styles.projectParagraph}>
              <div>
                <p>
                  <strong>Weather App</strong>
                </p>
                <br />
                <p>
                  Weather Dashboard: A web application utilizing HTML, CSS, and
                  JavaScript to fetch real-time weather data via the
                  OpenWeatherMap API. Users can search cities, view climate
                  information, revisit searches, and manage a history of
                  previous queries.
                </p>
                <br />
              </div>
            </div>
          </a>
        </div>

        {/* <div style={styles.projectContainer}>
          <a href="" style={styles.aProjects}>
            <div className="imageContainer myImage"></div>
            <p style={styles.projectParagraph}>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
         
            </p>
          </a>
        </div> */}
      </div>
    </div>
  );
};

export default Projects;
