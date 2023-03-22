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
            class={`card mb-3 ${styles.card}`}
            onClick={() => {
                handleUserDetails(`/user/details/${id}`);
            }}
        >
            <div class="row g-0">
                <div class={`col-md-4 ${styles.content_image}`}>
                    <img
                        src={avatar}
                        className={styles.image_avatar}
                        alt="Avatar usuário"
                    />
                </div>
                <div class="col-md-8">
                    <div class="card-body">
                        <h5 class="card-title">{name}</h5>
                        <p class="card-text">{website}</p>
                        <p class="card-text">
                            <small class="text-muted">{company}</small>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CardUser;
