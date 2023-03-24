import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Input from "../../components/utils/Input";
import Container from "./../../components/Container";
import Content from "./../../components/Content";
import Painel from "./../../components/Painel";
import styles from "./index.module.css";

function UserDetails() {
    const { id } = useParams();
    const [user, setUser] = useState({});
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [userName, setUsername] = useState("");
    const [phone, setPhone] = useState("");
    const [website, setWebsite] = useState("");
    const [companyName, setCompanyName] = useState("");
    const [companyBs, setCompanyBs] = useState("");
    const [companyPhrase, setCompanyPhrase] = useState("");
    const [street, setStreet] = useState("");
    const [suite, setSuite] = useState("");
    const [city, setCity] = useState("");
    const [zip, setZip] = useState("");

    useEffect(() => {
        getData();
        setInputs();
    });

    async function getData() {
        await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
            .then((resp) => resp.json())
            .then((data) => setUser(data))
            .catch((e) => console.log("Error: " + e));
    }

    async function setInputs() {
        await setEmail(user.email);
        await setName(user.name);
        await setUsername(user.username);
        await setPhone(user.phone);
        await setWebsite(user.website);
        await setCompanyName(user.company.name);
        await setCompanyBs(user.company.bs);
        await setCompanyPhrase(user.company.catchPhrase);
        await setStreet(user.address.street);
        await setSuite(user.address.suite);
        await setCity(user.address.city);
        await setZip(user.address.zipcode);
    }

    return (
        <>
            <Container>
                <Painel text="User" />
            </Container>
            <div className={styles.users}>
                <Container>
                    <Content>
                        <div className="row">
                            <Input
                                disabled={true}
                                label="Name"
                                nameClass="col-md-6 mb-3"
                                type="text"
                                value={name}
                            />
                            <Input
                                disabled={true}
                                label="Email"
                                nameClass="col-md-6 mb-3"
                                type="email"
                                value={email}
                            />
                            <Input
                                disabled={true}
                                label="User"
                                nameClass="col-md-4 mb-3"
                                type="text"
                                value={userName}
                            />
                            <Input
                                disabled={true}
                                label="Phone"
                                nameClass="col-md-4 mb-3"
                                type="phone"
                                value={phone}
                            />
                            <Input
                                disabled={true}
                                label="Website"
                                nameClass="col-md-4 mb-3"
                                type="text"
                                value={website}
                            />
                            <Input
                                disabled={true}
                                label="Company"
                                nameClass="col-md-6 mb-3"
                                type="text"
                                value={companyName}
                            />
                            <Input
                                disabled={true}
                                label="Company BS"
                                nameClass="col-md-6 mb-3"
                                type="text"
                                value={companyBs}
                            />
                            <Input
                                disabled={true}
                                label="Company Phrase"
                                nameClass="col-md-12 mb-3"
                                type="text"
                                value={companyPhrase}
                            />
                            <Input
                                disabled={true}
                                label="City"
                                nameClass="col-md-3 mb-3"
                                type="text"
                                value={city}
                            />
                            <Input
                                disabled={true}
                                label="Street"
                                nameClass="col-md-3 mb-3"
                                type="text"
                                value={street}
                            />
                            <Input
                                disabled={true}
                                label="Suite"
                                nameClass="col-md-3 mb-3"
                                type="text"
                                value={suite}
                            />
                            <Input
                                disabled={true}
                                label="Zipcode"
                                nameClass="col-md-3 mb-3"
                                type="text"
                                value={zip}
                            />
                        </div>
                    </Content>
                </Container>
            </div>
        </>
    );
}

export default UserDetails;
