import React from "react";
import styles from "../styles/style";
import Badge from "./badge";
// import estilo from "../styles/estilo.css";

const Content = () => {
  return (
    <div style={styles.main} className="contentMain">
      <h2 style={styles.h2}>Know what I can do:</h2>
      <div style={styles.horizontal} className="horizontal">
        <div style={styles.left}>
          <div style={styles.textContainer}>
            <p style={{ lineHeight: 2 }}>
              As a full-stack developer with two years of experience, I have
              honed a broad skill set across web and mobile application
              development. My front-end capabilities include creating responsive
              and dynamic interfaces with HTML5, CSS, JavaScript, Bootstrap, and
              React. On the back-end, I am proficient in Node.js, Express, and
              MongoDB. I am also developing my mobile skills using React Native
              to ensure seamless integration between front-end and back-end
              operations. Additionally, I have experience with AJAX API
              interactions, Git, MERN stack, MySQL, progressive web applications
              (PWAs), and user authentication.
            </p>
          </div>
        </div>

        <div style={styles.right} className="right">
          <div style={styles.imageContainerBoth}>
            <div style={styles.myPicture1} className="myPicture1"></div>
            <div className="invisibleBadge">
              <Badge />
            </div>
          </div>
        </div>
      </div>

      <div style={styles.horizontal} className="horizontal">
        <div style={styles.left}>
          <div style={styles.imageContainer} className="imageContainer, badge">
            <Badge />
          </div>
        </div>
        <div style={styles.right}>
          <h2 style={styles.h2}>Get to know me a little!</h2>
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
