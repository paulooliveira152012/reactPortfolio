import React from "react";
import Header from "../components/header";
import Projects from "../components/projects";
import Content from "../components/content";
import Footer from "../components/footer";
import estilo from "../styles/estilo.css"; //this is being applied!
import styles from "../styles/style";
import backgroundImage from "../images/background.jpeg";
import myPicture from "../images/mypicture.jpeg";

function LandingPage() {
  return (
    <div>
      <main>
        <Header />
        <div style={styles.hero}>
          {/* <div style={styles.left}>
            <p style={styles.heroLine}>
              Welcome to my portfolio! Feel free to check out my work and get
              connected!
            </p>
          </div> */}
          <div style={styles.left}>
            <div style={styles.heroLine}>
              <p>
                Welcome to my portfolio! Feel free to check out my work and get
                connected!
              </p>
            </div>
          </div>
          {/* right (just for spacing) */}
          <div style={styles.right}></div>
        </div>

        <section>
          <Projects />
        </section>

        <section>
            <Content />
        </section>

      </main>
      <Footer />
    </div>
  );
}

export default LandingPage;
