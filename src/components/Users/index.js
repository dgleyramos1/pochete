import { useState, useEffect } from "react";
import styles from "./index.module.css";
import Container from "./../Container";
import CardUser from "./../CardUser";
import Button from "../utils/Button";

function Users({ qtd }) {
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
                <h2 className={styles.title}>Users</h2>
                <div className={`row ${styles.row}`}>
                    {users
                        .filter((user) => user.id <= qtd)
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
                    <Button path="/users" text="View more" />
                </div>
            </Container>
        </div>
    );
}

export default Users;
