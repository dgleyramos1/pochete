import React from "react";
import Container from "../Container";
import styles from "./index.module.css";
import { Link } from "react-router-dom";

function Header() {
    return (
        <header className={styles.header}>
            <Container>
                <div className={styles.content}>
                    <Link to="/" className={styles.logo}>
                        POCHETE
                    </Link>
                </div>
            </Container>
        </header>
    );
}

export default Header;
