import React from "react";
import { Link } from "react-router-dom";
import styles from "./index.module.css";

function CardPost({ title, content, id }) {
    return (
        <div className={`card ${styles.card}`}>
            <div className="card-body">
                <h5 className={`card-title ${styles.title}`}>{title}</h5>
                <p className={`card-text ${styles.text}`}>{content}</p>
                <Link to={`/${id}`} className={`btn ${styles.btn}`}>
                    Saiba mais!
                </Link>
            </div>
        </div>
    );
}

export default CardPost;
