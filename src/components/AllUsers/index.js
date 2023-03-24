import { useState, useEffect } from "react";
import styles from "./index.module.css";
import Container from "./../../components/Container";
import CardUser from "./../../components/CardUser";

function AllUsers() {
    const [users, setUsers] = useState([]);
    const [qtdFinal, setQtdFinal] = useState(9);
    const [qtdInicial, setQtdinicial] = useState(0);

    useEffect(() => {
        getData();
    });
    function handleProximo() {
        setQtdinicial(qtdFinal);
        setQtdFinal(qtdFinal + 9);
    }
    function handleAnterior() {
        setQtdFinal(qtdInicial);
        setQtdinicial(qtdInicial - 9);
    }

    async function getData() {
        await fetch("https://jsonplaceholder.typicode.com/users")
            .then((resp) => resp.json())
            .then((data) => setUsers(data))
            .catch((e) => console.log("Error: " + e));
    }
    return (
        <div className={styles.users}>
            <Container>
                <div className={`row ${styles.row}`}>
                    {users
                        .filter(
                            (user) =>
                                user.id > qtdInicial && user.id <= qtdFinal
                        )
                        .map((user, key) => (
                            <div
                                className={`col-md-6 col-lg-4 ${styles.col}`}
                                key={key}
                            >
                                <CardUser
                                    name={user.name}
                                    website={user.website}
                                    company={user.company.name}
                                    id={user.id}
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
                        disabled={users.length >= qtdFinal ? false : true}
                    >
                        Próximo
                    </button>
                </div>
            </Container>
        </div>
    );
}

export default AllUsers;
