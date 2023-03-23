import React from "react";
import styles from "./index.module.css";

function Content({ children }) {
    return (
        <div className="row">
            <div className={styles.content}>{children}</div>
        </div>
    );
}

export default Content;
