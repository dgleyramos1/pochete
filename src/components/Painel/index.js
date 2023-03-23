import React from "react";
import styles from "./index.module.css";

function Painel({ text }) {
    return (
        <div className={`row ${styles.row}`}>
            <h1 className={styles.title}>{text}</h1>
        </div>
    );
}

export default Painel;
