import React from "react";
  // import projectImagePlaceholder from "../images/projectPlaceholder.jpeg";
import styles from "../styles/style";
// import images
  // import gradsapp from "../images/projectsScreenshot/gradsapp.png";
  // import gradsweb from "../images/projectsScreenshot/gradsweb.png";
  // import launion from "../images/projectsScreenshot/launion.jpeg";
// link estilos
import estilo from "../styles/estilo.css"

const Projects = () => {
  return (
    <div style={estilo}>
      <h2 style={styles.h2}>Projects:</h2>
      <div className="projectsContainer" style={styles.projectsContainer}>

        {/* container to use 100 vh */}
        <div style={styles.projectContainer} className="projectContainer">
          {/* grads app */}
          <a
            href="https://www.google.com/url?q=https%3A%2F%2Fapps.apple.com%2Fus%2Fapp%2Fgrads-app%2Fid1524440253&sa=D&sntz=1&usg=AOvVaw3H_wLYOKzawFdm1g1bm9Pq"
            style={styles.aProjects}
            target="_blank"
            rel="noreferrer"
          >
            {/* <img src={gradsapp} alt="gradsapp" style={styles.projectImg}></img> */}
            <div className="imageContainer gradsApp"></div>
            <div style={styles.projectParagraph}>
              <div>
                <p>
                  <strong>Grads: Connect, Study, and Thrive</strong>
                </p>
                <br />
                <p>
                  Grads is a cross-platform app built with React Native for both
                  iOS and Android. It fosters a student-focused community through
                  networking, resource sharing, and collaboration.
                </p>
                <br />
                {/* <p>
                    Key technical
                      features include:
                </p> */}
                {/* <ul>
                  <li>
                    <strong>React Native Components:</strong> Reusable components
                    ensure a consistent user interface and efficient structure.
                  </li>
                  <li>
                    <strong>Backend Routes:</strong> API endpoints handle secure
                    interactions, from creating accounts to making posts, while
                    linking posts to specific users.
                  </li>
                  <li>
                    <strong>MongoDB Database:</strong> Serves as the primary
                    database, managing user data, study groups, and posts.
                  </li>
                </ul>
                <p>
                  <strong>Core Functionalities:</strong>
                </p>
                <ul>
                  <li>
                    <strong>Peer Connections:</strong> Search or get
                    recommendations to connect with fellow students globally.
                  </li>
                  <li>
                    <strong>Tutoring Services:</strong> List or find tutoring
                    services through backend-secured routes.
                  </li>
                  <li>
                    <strong>Study Groups:</strong> Create or join study groups for
                    collaborative learning.
                  </li>
                  <li>
                    <strong>Marketplace:</strong> Buy or sell textbooks and items
                    in a secure student-only environment.
                  </li>
                  <li>
                    <strong>Couch Surfing:</strong> Find short-term housing with
                    fellow students for travel or exchanges.
                  </li>
                </ul>
                <p>
                  Grads utilizes a modern tech stack to deliver a responsive and
                  user-friendly experience, supporting seamless student engagement
                  across platforms.
                </p> */}
              </div>
            </div>
          </a>
        </div>

        {/* grads website */}
        <div style={styles.projectContainer}  className="projectContainer">
          <a
            href="https://paulooliveira152012.github.io/grads/"
            target="_blank"
            rel="noreferrer"
            style={styles.aProjects}
          >
            {/* <img src={gradsweb} alt="grads website" style={styles.projectImg}></img> */}
            <div className="imageContainer gradsWebsite"></div>
            <div style={styles.projectParagraph}>
              <div>
                <p>
                  <strong>
                    Grads App Website: Your Gateway to Student Success
                  </strong>
                </p>
                <br />
                <p>
                The Grads app website promotes the app and encourages students to join the community. Built with HTML, CSS, JavaScript, and Bootstrap, it showcases the app's features and invites engagement.
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
                  <strong>
                  La Union Tire Inc.
                  </strong>
                </p>
                <br />
                <p>
                La Union Tire Inc. is a tire shop with a landing page built using HTML, JavaScript, and CSS. It provides essential information about services and invites visitors to explore further.
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
