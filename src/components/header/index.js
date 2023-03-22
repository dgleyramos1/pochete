import React from "react";
import Container from "../container";
import styles from "./index.module.css";

function index() {
    return (
        <header className={styles.header}>
            <Container>
                <div className={styles.content}>
                    <h1 className={styles.logo}>POCHETE</h1>
                </div>
            </Container>
        </header>
    );
}

export default index;
