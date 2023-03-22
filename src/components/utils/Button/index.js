import React from "react";
import { Link } from "react-router-dom";
import styles from "./index.module.css";

function Button({ path, text }) {
    return (
        <Link to={path} className={`btn ${styles.btn}`}>
            {text}
        </Link>
    );
}

export default Button;
