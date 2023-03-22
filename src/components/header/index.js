import React from "react";
import Container from "../Container";
import styles from "./index.module.css";

function Header() {
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

export default Header;
