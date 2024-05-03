import React from "react";
import styles from "../styles/style";
import resume from "../docs/resume.pdf"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faFile } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
  


const Header = () => {
  return (
    <div className="header" style={styles.header}>
        <div className="left">
            <h1 style={styles.title}>Paulo de Lacerda Oliveira</h1>
        </div>

        <div className="right">
            <ul style={styles.list}>
                <li>
                    <a href="https://www.linkedin.com/in/paulo-de-lacerda-oliveira-552677b7/" target="_blank" rel="noopener noreferrer" style={styles.a}>
                    <FontAwesomeIcon icon={faLinkedin} />
                    </a>
                </li>

                <li>
                    <a href="tel:+19086308458" style={styles.a}>
                    <FontAwesomeIcon icon={faPhone} />
                    </a>
                </li>

                <li>
                    <a href="mailto:paulooliveira152012@gmail.com" target="_blank" rel="noopener noreferrer" style={styles.a}>
                    <FontAwesomeIcon icon={faEnvelope}/>
                    </a>
                </li>

                <li>
                    <a href={resume} target="_blank" rel="noopener noreferrer" style={styles.a}>
                    <FontAwesomeIcon icon={faFile} />
                    </a>
                </li>            
            </ul>
        </div>
    </div>
  )
}

export default Header;
