import React from "react";
import styles from "./index.module.css";
import avatar from "./../../assets/img/avatar.png";
import { useNavigate } from "react-router-dom";

function CardUser({ name, website, company, id }) {
    const navigate = useNavigate();
    function handleUserDetails(path) {
        navigate(path);
    }
    return (
        <div
            className={`card mb-3 ${styles.card}`}
            onClick={() => {
                handleUserDetails(`/user/details/${id}`);
            }}
        >
            <div className="row g-0">
                <div className={`col-md-4 ${styles.content_image}`}>
                    <img
                        src={avatar}
                        className={styles.image_avatar}
                        alt="Avatar usuário"
                    />
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">{name}</h5>
                        <p className="card-text">{website}</p>
                        <p className="card-text">
                            <small className="text-muted">{company}</small>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CardUser;
