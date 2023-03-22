import { useState, useEffect } from "react";
import styles from "./index.module.css";
import Container from "./../Container";
import CardPost from "../CardPost";
import Button from "../utils/Button";

function Posts() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        getData();
    }, []);

    async function getData() {
        await fetch("https://jsonplaceholder.typicode.com/posts")
            .then((resp) => resp.json())
            .then((data) => setPosts(data))
            .catch((e) => console.log(e));
    }
    return (
        <div className={styles.posts}>
            <Container>
                <h2 className={styles.title}>Fórum</h2>
                <div className={`row ${styles.row}`}>
                    {posts
                        .filter((index) => index.id <= 3)
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
                    <Button path="/posts" text="Veja mais" />
                </div>
            </Container>
        </div>
    );
}

export default Posts;
