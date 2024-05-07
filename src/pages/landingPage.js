import React from "react";
import Projects from "../components/projects";
import Content from "../components/content";
import Footer from "../components/footer";
import styles from "../styles/style";
import WelcomeMessage from "../components/welcome";

function LandingPage() {
  return (
    <div>
      <main>
        {/* <Header /> */}
        <div style={styles.hero}>
          {/* <div style={styles.left}>
            <p style={styles.heroLine}>
              Welcome to my portfolio! Feel free to check out my work and get
              connected!
            </p>
          </div> */}
          <div style={styles.left}>
                <div style={styles.heroLine}>
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
