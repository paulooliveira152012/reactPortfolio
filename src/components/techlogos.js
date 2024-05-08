import React from "react";
import styles from "../styles/style";
// import estilo from "../styles/estilo.css"


const Logos = () => {
    return (
        <div style={styles.allLogos} >
            <div className="logoContainer html"></div>
            <div className="logoContainer css"></div>
            <div className="logoContainer js"></div>
            <div className="logoContainer bootstrap" style={{marginTop: "12px"}}></div>
            <div className="logoContainer git" style={{marginTop: "30px"}}></div>
            <div className="logoContainer ajax" style={{marginTop: "20px"}}></div>
            <div className="logoContainer express" style={{marginTop: "30px"}}></div>
            <div className="logoContainer mongodb" style={{marginTop: "30px"}}></div>
            <div className="logoContainer mysql"></div>
            <div className="logoContainer node" style={{marginTop: "20px"}}></div>
        </div>
    )
}

export default Logos