import React from "react";
import styles from "./index.module.css";
import Container from "./../Container";
import image from "./../../assets/img/hero-image.png";

function Hero() {
    return (
        <div className={styles.hero}>
            <Container>
                <div className={`row ${styles.row}`}>
                    <div className={`col-md-6 col-xl-5 ${styles.textual}`}>
                        <h1 className={styles.title}>Welcome to Pochete</h1>
                        <p className={styles.texto}>
                            The forum offers a variety of topics, from
                            programming and software development to mobile
                            devices and social networking. If you're looking for
                            a place to connect with other tech enthusiasts and
                            learn from your peers, the Pochete forum is the
                            perfect place for you. Join the community and start
                            exploring the world of technology today!
                        </p>
                    </div>
                    <div className={`col-md-6 col-xl-7 ${styles.img_content}`}>
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
