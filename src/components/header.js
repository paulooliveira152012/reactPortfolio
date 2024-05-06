// currently not in use

import React from "react";
import styles from "../styles/style";
import resume from "../docs/resume.pdf";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faFile } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { textStyle } from "../styles/style";

const Header = () => {
  return (
    <div className="header" style={styles.header}>
      <div className="left">
        <h1 style={styles.title}>Paulo de Lacerda Oliveira</h1>
      </div>

      <div className="right">
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
            >
              <FontAwesomeIcon icon={faFile} color="#EEEEEE" />
            </a>
          </li>
          </ul>
      </div>
    </div>
  );
};

export default Header;


