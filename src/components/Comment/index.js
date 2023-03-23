import React from "react";
import styles from "./index.module.css";

function index({ name, body, email }) {
    return (
        <div className={styles.comment}>
            <h5 className={styles.name}>{name}</h5>
            <p className={styles.body}>{body}</p>
            <p className={styles.email}>{email}</p>
        </div>
    );
}

export default index;
