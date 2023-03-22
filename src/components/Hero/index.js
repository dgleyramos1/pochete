import React from "react";
import styles from "./index.module.css";
import Container from "./../Container";
import image from "./../../assets/img/hero-image.png";

function Hero() {
    return (
        <div className={styles.hero}>
            <Container>
                <div className={`row ${styles.row}`}>
                    <div className={`col-md-6 col-xl-4 ${styles.textual}`}>
                        <h1 className={styles.title}>Bem-vindo ao Pochete</h1>
                        <p className={styles.texto}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Phasellus congue, diam nec dignissim lacinia,
                            velit odio ornare magna, at bibendum lorem arcu a
                            dolor. Sed vel ex ut enim gravida iaculis quis in
                            est.
                        </p>
                    </div>
                    <div className={`col-md-6 col-xl-8 ${styles.img_content}`}>
                        <img
                            src={image}
                            className={styles.image}
                            alt="Imagem de telecomunicações"
                        />
                    </div>
                </div>
            </Container>
        </div>
    );
}

export default Hero;
