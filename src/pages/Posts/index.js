import React from "react";
import Container from "./../../components/Container";
import styles from "./index.module.css";

function Posts() {
    return (
        <>
            <div>
                <Container>
                    <div className={`row ${styles.row}`}>
                        <h1 className={styles.title}>Fórum</h1>
                    </div>
                </Container>
            </div>
        </>
    );
}
export default Posts;
