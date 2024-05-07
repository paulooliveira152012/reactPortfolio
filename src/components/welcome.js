// welcome.js
import React, { useState, useEffect } from "react";
import styles from "../styles/style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faGithub,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import estilo from "../styles/estilo.css"

const WelcomeMessage = () => {
  // State to control the text being displayed
  const [displayText, setDisplayText] = useState("");
  // State to control the visibility of social media icons
  const [showIcons, setShowIcons] = useState(false);

  // Define the full message
  const fullMessage = "Welcome to my portfolio! I'm Paulo Oliveira. Feel free to check out my work and get connected!";

  // Function to simulate typing effect
  useEffect(() => {
    let currentIndex = 0;

    const interval = setInterval(() => {
      if (currentIndex <= fullMessage.length) {
        setDisplayText(fullMessage.substring(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(interval);
        // Set showIcons to true after the message has been fully typed out
        setShowIcons(true);
      }
    }, 50); // Typing speed, adjust as needed

    // Cleanup function to clear interval on component unmount
    return () => clearInterval(interval);
  }, []); // Empty dependency array ensures this runs only once

  return (
    <div style={styles.left} className="left">
      <div style={styles.heroContainer} className="heroContainer">
        <p style={styles.textLeft} className="textLeft">
          {displayText}
        </p>
        {/* Social Media Icons */}
        {showIcons && (
          <div style={{ display: "flex", justifyContent: "center", marginTop: "20px" }}>
            <a
              style={styles.a}
              href="https://www.linkedin.com/in/paulo-de-lacerda-oliveira-552677b7/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
            <a
              style={styles.a}
              href="https://github.com/paulooliveira152012"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <FontAwesomeIcon icon={faGithub} />
            </a>
            <a
              style={styles.a}
              href="https://www.instagram.com/your_instagram_username"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a href="tel:+19086308458" style={styles.a} aria-label="Phone">
              <FontAwesomeIcon icon={faPhone} color="#EEEEEE" />
            </a>
            <a
              href="mailto:paulooliveira152012@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              style={styles.a}
              aria-label="Email"
            >
              <FontAwesomeIcon icon={faEnvelope} color="#EEEEEE" />
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default WelcomeMessage;
