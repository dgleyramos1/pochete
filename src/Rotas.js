import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Forum from "./pages/Forum";
import ForumDetails from "./pages/ForumDetails";
import Home from "./pages/Home";
import User from "./pages/User";

function Rotas() {
    return (
        <Router>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/posts" element={<Forum />} />
                <Route path="/posts/:id" element={<ForumDetails />} />
                <Route path="/users" element={<User />} />
            </Routes>
            <Footer />
        </Router>
    );
}

export default Rotas;
