// landingPage.js
import React from "react";
import Projects from "../components/projects";
import Content from "../components/content";
// import Logos from "../components/techlogos";
import Footer from "../components/footer";
import estilo from "../styles/estilo.css"; //this is being applied!
import styles from "../styles/style";
// import backgroundImage from "../images/background.jpeg";
// import myPicture from "../images/mypicture.jpeg";
import WelcomeMessage from "../components/welcome";

function LandingPage() {
  return (
    <div>
      {/* using estilo.body just so the estilo import is recognized to prevent deployiment failure */}
      <main style={estilo.body}>
        {/* <Header /> */}
        <div style={styles.blurOverlay} className="blur-overlay">
          <div style={styles.hero} className="hero">
            {/* <div style={styles.left}>
              <p style={styles.heroLine}>
                Welcome to my portfolio! Feel free to check out my work and get
                connected!
              </p>
            </div> */}
            <div style={styles.left}>
                  <div style={styles.heroContainer} className="heroLine">
                  {/* <p style={styles.textLeft}>
                      Welcome to my portfolio! Feel free to check out my work and get
                      connected!
                  </p> */}
                  <WelcomeMessage />
                  </div>
          
            </div>
            {/* right (just for spacing) */}
              <div style={styles.right}></div>
          
          </div>
        </div>

        <section>
          <Projects />
        </section>

        <section>
          {/* <Logos /> */}
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
