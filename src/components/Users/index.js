import { useState, useEffect } from "react";
import styles from "./index.module.css";
import Container from "./../Container";
import CardUser from "./../CardUser";
import Button from "../utils/Button";

function Users() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        getData();
    }, []);

    async function getData() {
        await fetch("https://jsonplaceholder.typicode.com/users")
            .then((resp) => resp.json())
            .then((data) => setUsers(data))
            .catch((e) => console.log("Error: " + e));
    }

    return (
        <div className={styles.container}>
            <Container>
                <h2 className={styles.title}>Usuários</h2>
                <div className={`row ${styles.row}`}>
                    {users
                        .filter((user) => user.id <= 3)
                        .map((user, key) => (
                            <div className="col-md-6 col-lg-4" key={key}>
                                <CardUser
                                    name={user.name}
                                    website={user.website}
                                    company={user.company.name}
                                    id={user.id}
                                />
                            </div>
                        ))}
                </div>
                <div className={styles.content_button}>
                    <Button path="/users" text="Veja mais" />
                </div>
            </Container>
        </div>
    );
}

export default Users;
