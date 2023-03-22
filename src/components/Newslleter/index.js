import { useState } from "react";
import { toast } from "react-toastify";
import Container from "./../Container";
import styles from "./index.module.css";
import image from "./../../assets/img/newsletter.png";

function Newsletter() {
    const [email, setEmail] = useState("");
    function handleNewsletter() {
        let emailRegex = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+.([a-z]+)?$/i;

        if (emailRegex.test(email)) {
            localStorage.setItem("newsletter", email);
            setEmail("");
            toast.success("Email cadastrado!");
            return;
        }

        toast.error("Email inválido");
    }
    return (
        <div>
            <Container>
                <div className={`row ${styles.row}`}>
                    <div className={`col-md-4 ${styles.col}`}>
                        <img
                            src={image}
                            className={styles.image}
                            alt="Imagem da newsletter"
                        />
                    </div>
                    <div className={`col-md-4 ${styles.col}`}>
                        <div>
                            <h5>
                                Assine já a nossa newsletter para não perder
                                nenhuma novidade!
                            </h5>
                            <div className={styles.content}>
                                <label className={styles.label}>
                                    <input
                                        type="text"
                                        className={styles.input}
                                        onChange={(e) =>
                                            setEmail(e.target.value)
                                        }
                                        value={email}
                                    />
                                </label>
                                <button
                                    className={`btn ${styles.btn}`}
                                    onClick={handleNewsletter}
                                >
                                    Assinar
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
}

export default Newsletter;
