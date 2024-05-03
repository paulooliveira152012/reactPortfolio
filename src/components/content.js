import React from "react";
import styles from "../styles/style";

const Content = () => {
  return (
    <div style={styles.writtenContentContainer}>
      {/* my story */}
      <section style={styles.writtenContent}>
        <p>
          As a full-stack developer with two years of experience, I have honed a
          broad skill set across web and mobile application development. My
          front-end capabilities include creating responsive and dynamic
          interfaces with HTML5, CSS, JavaScript, Bootstrap, and React, while on
          the back-end, I am proficient in Node.js, Express, and MongoDB. I am
          also developing my mobile skills using React Native to ensure seamless
          integration between front-end and back-end operations.
        </p>
        <br />
        <p>
          In addition to my development work, I have managed projects at Grads,
          transforming the startup founder's vision into functional designs that
          align both front-end presentation and back-end functionality.
          Currently, I further my expertise by teaching coding fundamentals to
          children at The Coder School, using Scratch and Python, which enhances
          my own skills in Python for automation and data-driven projects. I am
          passionate about tackling new coding challenges and continually
          adapting to advance in the tech industry. I would be thrilled to bring
          my dedication and quality work to your team.
        </p>
      </section>
    </div>
  );
};

export default Content;
