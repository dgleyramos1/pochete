import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Rotas from "./Rotas";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <>
        <Rotas />
        <ToastContainer autoClose={3000} />
    </>
);
