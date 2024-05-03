import React from "react";
import styles from "../styles/style";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faFacebook, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faFile } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import resume from '../docs/resume.pdf'


const Footer = () => {
    return (
        <footer style={styles.footer}>
            <div style={styles.footerColumn}>
                {/* contact info (phone and email) */}
                <h2 style={styles.h2}>Contact</h2>
                <ul>
                <li style={styles.footerList}>
                    <a href="tel:+19086308458" style={styles.a}>
                    <FontAwesomeIcon icon={faPhone} color="#EEEEEE"/> +1 908 630 8458
                    </a>
                </li>

                <li style={styles.footerList}>
                    <a href="mailto:paulooliveira152012@gmail.com" target="_blank" rel="noopener noreferrer" style={styles.a}>
                    <FontAwesomeIcon icon={faEnvelope} color="#EEEEEE"/> paulooliveira152012@gmail.com
                    </a>
                </li>
                </ul>
            </div>

            <div style={{...styles.footerColumn}}>
                {/* social media */}
                <h2 style={styles.h2}>Social</h2>
                <div style={{display:"flex", justifyContent:"center"}}>
                    <li style={{...styles.footerList, marginLeft:"20px"}}>
                        <a style={styles.a} href="https://www.linkedin.com/in/paulo-de-lacerda-oliveira-552677b7/" target="_blank">  
                        <FontAwesomeIcon icon={faLinkedin}/>
                        </a>
                    </li>
                    <li style={styles.footerList}>
                        <a style={styles.a} href="https://www.facebook.com/profile.php?id=100005004306012" target="_blank" >
                            <FontAwesomeIcon icon={faFacebook}/>
                        </a>
                    </li>
                    <li style={styles.footerList}>
                        <a style={styles.a} href="https://github.com/paulooliveira152012" target="_blank">
                            <FontAwesomeIcon icon={faGithub}/>
                        </a>
                    </li>
                </div>

            </div>
            <div style={styles.footerColumn}>
                {/* resume */}
                <h2 style={styles.h2}>My resume</h2>
                <li style={styles.footerList}>
                    <a href={resume} target="_blank" rel="noopener noreferrer" style={styles.a}>
                    <FontAwesomeIcon icon={faFile} color="#EEEEEE" />
                    </a>
                </li>            
            </div>
        </footer>
    )
};

export default Footer;