import { useState, useEffect } from "react";
import styles from "./index.module.css";
import Container from "./../Container";
import CardPost from "../CardPost";

function Blog() {
    const [posts, setPosts] = useState([]);
    const [qtdFinal, setQtdFinal] = useState(9);
    const [qtdInicial, setQtdinicial] = useState(0);

    useEffect(() => {
        getData();
    }, []);

    async function getData() {
        await fetch("https://jsonplaceholder.typicode.com/posts")
            .then((resp) => resp.json())
            .then((data) => setPosts(data))
            .catch((e) => console.log(e));
    }

    function handleProximo() {
        setQtdinicial(qtdFinal);
        setQtdFinal(qtdFinal + 9);
    }
    function handleAnterior() {
        setQtdFinal(qtdInicial);
        setQtdinicial(qtdInicial - 9);
    }
    return (
        <div className={styles.posts}>
            <Container>
                <div className={`row ${styles.row}`}>
                    {posts
                        .filter(
                            (post) =>
                                post.id > qtdInicial && post.id <= qtdFinal
                        )
                        .map((post, key) => (
                            <div
                                className={`col-md-6 col-lg-4 ${styles.col}`}
                                key={key}
                            >
                                <CardPost
                                    id={post.id}
                                    title={post.title}
                                    content={post.body}
                                />
                            </div>
                        ))}
                </div>
                <div className={styles.container}>
                    <button
                        className={`btn ${styles.btn}`}
                        onClick={handleAnterior}
                        disabled={qtdInicial === 0 ? true : false}
                    >
                        Anterior
                    </button>
                    <button
                        className={`btn ${styles.btn}`}
                        onClick={handleProximo}
                        disabled={posts.length >= qtdFinal ? false : true}
                    >
                        Próximo
                    </button>
                </div>
            </Container>
        </div>
    );
}

export default Blog;
