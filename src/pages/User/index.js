import React from "react";
import AllUsers from "../../components/AllUsers";
import Container from "./../../components/Container";
import Painel from "./../../components/Painel";
function User() {
    return (
        <>
            <Container>
                <Painel text="Usuários" />
            </Container>
            <AllUsers />
        </>
    );
}

export default User;
