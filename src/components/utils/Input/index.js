import React from "react";
import styles from "./index.module.css";

function Input({ disabled, label, type, value, nameClass }) {
    return (
        <div className={nameClass}>
            <label htmlFor="input" className={`form-label ${styles.label}`}>
                {label}
            </label>
            <input
                type={type}
                className={`form-control ${styles.input}`}
                id="input"
                disabled={disabled}
                defaultValue={value}
            />
        </div>
    );
}

export default Input;
