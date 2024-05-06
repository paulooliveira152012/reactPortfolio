import React from "react";
import styles from "../styles/style";
import Badge from "./badge";

const Content = () => {
  return (
    <div style={styles.main}>
      <div style={styles.horizontal}>
        <div style={styles.left}>
          <div style={styles.textContainer}>
            <p style={{ lineHeight: 2 }}>
              As a full-stack developer with two years of experience, I have
              honed a broad skill set across web and mobile application
              development. My front-end capabilities include creating responsive
              and dynamic interfaces with{" "}
              <strong>HTML5, CSS, JavaScript, Bootstrap, and React</strong>,
              while on the back-end, I am proficient in{" "}
              <strong>Node.js, Express, and MongoDB</strong>. I am also
              developing my mobile skills using <strong>React Native</strong> to
              ensure seamless integration between front-end and back-end
              operations. Additionally, I have experience with{" "}
              <strong>
                AJAX API Interactions, Git, MERN STACK (MongoDB, Express.js,
                React.js, Node.js), MongoDB, MySQL, progressive Web Applications
                (PWAs), and user Authentication
              </strong>
              .
            </p>
          </div>
        </div>

        <div style={styles.right}>
          <div style={styles.imageContainer}>
            <div style={styles.myPicture1}></div>
          </div>
        </div>
      </div>

      <div style={styles.horizontal}>
        <div style={styles.left}>
          <div style={styles.imageContainer}>
            <Badge />
          </div>
        </div>
        <div style={styles.right}>
          <div style={styles.textContainer}>
            <p style={{ lineHeight: 2 }}>
              In addition to my development work, I have managed projects at
              Grads, transforming the startup founder's vision into functional
              designs that align both front-end presentation and back-end
              functionality. Currently, I further my expertise by teaching
              coding fundamentals to children at The Coder School, using Scratch
              and Python, which enhances my own skills in Python for automation
              and data-driven projects. I am passionate about tackling new
              coding challenges and continually adapting to advance in the tech
              industry. I would be thrilled to bring my dedication and quality
              work to your team.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;
