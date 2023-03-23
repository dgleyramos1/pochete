import React from "react";
import Container from "../../components/Container";
import Blog from "../../components/Blog";
import Painel from "../../components/Painel";

function Forum() {
    return (
        <>
            <div>
                <Container>
                    <Painel text="Fórum" />
                </Container>
            </div>
            <Blog />
        </>
    );
}
export default Forum;
