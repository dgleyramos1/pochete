import React from "react";
import styles from "./index.module.css";
import Container from "./../Container";
import { Link } from "react-router-dom";

function Footer() {
    return (
        <footer className={styles.footer}>
            <Container>
                <div className={styles.content}>
                    <p>&copy;Todos os direitos reservados</p>
                    <p>
                        Desenvolvido por{" "}
                        <Link
                            target="_blank"
                            to="https://github.com/dgleyramos1"
                            className={styles.author}
                        >
                            Dgley Ramos
                        </Link>
                    </p>
                </div>
            </Container>
        </footer>
    );
}

export default Footer;
