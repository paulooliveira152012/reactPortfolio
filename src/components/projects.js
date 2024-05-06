import React from "react";
import projectImagePlaceholder from "../images/projectPlaceholder.jpeg";
import styles from "../styles/style";
// import images
import gradsapp from "../images/projects screenshot/gradsapp.png";
import gradsweb from "../images/projects screenshot/gradsweb.png";
import launion from "../images/projects screenshot/launion.png";

const Projects = () => {
  return (
    // all projects
    <div className="projectsContainer" style={styles.projectsContainer}>
      {/* container to use 100 vh */}
      <div style={styles.projectContainer}>
        {/* grads app */}
        <a
          href="https://www.google.com/url?q=https%3A%2F%2Fapps.apple.com%2Fus%2Fapp%2Fgrads-app%2Fid1524440253&sa=D&sntz=1&usg=AOvVaw3H_wLYOKzawFdm1g1bm9Pq"
          style={styles.aProjects}
          target="_blank"
        >
          <img src={gradsapp} style={styles.projectImg}></img>
          <p style={styles.projectParagraph}>
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
          </p>
        </a>
      </div>

      {/* grads website */}
      <div style={styles.projectContainer}>
        <a
          href="https://paulooliveira152012.github.io/grads/"
          target="_blank"
          style={styles.aProjects}
        >
          <img src={gradsweb} style={styles.projectImg}></img>

          <p style={styles.projectParagraph}>
            <div>
              <p>
                <strong>
                  Grads App Website: Your Gateway to Student Success
                </strong>
              </p>
              <br />
              <p>
                The Grads app website is a showcase platform, designed to
                promote the Grads app and attract students to download and join
                this supportive community. Created with HTML, CSS, JavaScript,
                Bootstrap, and jQuery, this visually appealing website
                highlights the app's core features, encouraging students to
                explore and engage.
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
          </p>
        </a>
      </div>

         {/* La Union*/}
         <div style={styles.projectContainer}>
         <a
          href="https://paulooliveira152012.github.io/launiontireinc/"
          target="_blank"
          style={styles.aProjects}
        >
          <img src={launion} style={styles.projectImg}></img>

          <p style={styles.projectParagraph}>
            <div>
              <p>
                <strong>
                La Union Tire Inc.
                </strong>
              </p>
              <br />
              <p>
              La Union Tire Inc. is a tire shop offering comprehensive tire
            services and tire sales. Our project is a straightforward landing
            page crafted with simple <strong>HTML</strong>,{" "}
            <strong>JavaScript</strong>, and <strong>CSS</strong>. With a clean
            and intuitive design, our landing page provides essential
            information about our tire shop and services, inviting visitors to
            explore further and discover the quality and reliability of La Union
            Tire Inc.
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
          </p>
        </a>
      </div>


      {/* <div style={styles.projectContainer}>
        <a href="" style={styles.aProjects}>
          <img src={projectImagePlaceholder} style={styles.projectImg}></img>
          <p style={styles.projectParagraph}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Necessitatibus aut iste, temporibus et veritatis reiciendis non
            earum, corrupti quod, sapiente minus dolorum? Quisquam in suscipit
            praesentium alias? Similique, ipsa debitis. Lorem ipsum dolor, sit
            amet consectetur adipisicing elit. Necessitatibus aut iste,
            temporibus et veritatis reiciendis non earum, corrupti quod,
            sapiente minus dolorum? Quisquam in suscipit praesentium alias?
            Similique, ipsa debitis.
          </p>
        </a>
      </div> */}
    </div>
  );
};

export default Projects;
