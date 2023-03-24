import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styles from "./index.module.css";
import Content from "../../components/Content";
import Container from "./../../components/Container";
import Painel from "./../../components/Painel";
import Comment from "./../../components/Comment";

function ForumDetails() {
    const { id } = useParams();
    const [post, setPost] = useState({});
    const [comments, setComments] = useState([]);

    useEffect(() => {
        getPost();
        getComments();
    }, []);
    console.log(comments);

    async function getPost() {
        await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then((resp) => resp.json())
            .then((data) => setPost(data))
            .catch((e) => console.log("Error: " + e));
    }
    async function getComments() {
        await fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
            .then((resp) => resp.json())
            .then((data) => setComments(data))
            .catch((e) => console.log("error: " + e));
    }
    return (
        <div>
            <Container>
                <Painel text="Post" />
            </Container>
            <div className={styles.content}>
                <Container>
                    <Content>
                        <div className={styles.post}>
                            <h4 className={styles.post_title}>{post.title}</h4>
                            <p className={styles.post_body}>{post.body}</p>
                        </div>
                        <p>{comments.length} Comments</p>
                        <div className={styles.comments}>
                            {comments.map((comment, key) => (
                                <Comment
                                    key={key}
                                    name={comment.name}
                                    body={comment.body}
                                    email={comment.email}
                                />
                            ))}
                        </div>
                    </Content>
                </Container>
            </div>
        </div>
    );
}

export default ForumDetails;
