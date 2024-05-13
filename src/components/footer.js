import React from "react";
import styles from "../styles/style";
import resume from "../docs/resumePaulo.pdf"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faGithub,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faFile } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <div style={styles.footerContainer}>
        {/* Center Social Media Icons */}
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column" }}>
          <ul style={{ ...styles.footerSocial, listStyle: "none", padding: 0, display: "flex", justifyContent: "center", gap: "15px" }}>
            <li>
              <a
                style={styles.a}
                href="https://www.linkedin.com/in/paulo-de-lacerda-oliveira-552677b7/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
            </li>
            <li>
              <a
                style={styles.a}
                href="https://github.com/paulooliveira152012"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <FontAwesomeIcon icon={faGithub} />
              </a>
            </li>
            <li>
              <a
                style={styles.a}
                href="https://www.instagram.com/your_instagram_username"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <FontAwesomeIcon icon={faInstagram} />
              </a>
            </li>
            <li>
              <a href="tel:+19086308458" style={styles.a} aria-label="Phone">
                <FontAwesomeIcon icon={faPhone} color="#EEEEEE" />
              </a>
            </li>
            <li>
              <a
                href="mailto:paulooliveira152012@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                style={styles.a}
                aria-label="Email"
              >
                <FontAwesomeIcon icon={faEnvelope} color="#EEEEEE" />
              </a>
            </li>
            <li>
            <a
              href={resume}
              target="_blank"
              rel="noopener noreferrer"
              style={styles.a}
              aria-label="Email"
              download={resume}
            >
              <FontAwesomeIcon icon={faFile} color="#EEEEEE" />
            </a>
            </li>
          </ul>
        </div>

        {/* Copyright Section */}
        <div style={{ textAlign: "center", marginTop: "20px" }}>
          <p>© COPYRIGHTS PAULO OLIVEIRA. ALL RIGHTS RESERVED.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
