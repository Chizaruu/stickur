import React from "react";
import styles from "./App.module.scss";
import { Footer } from "./containers/Footer/Footer";
import { HomePage } from "./containers/HomePage/HomePage";
import { Nav } from "./containers/Nav/Nav";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CreatePage from "./containers/CreatePage/CreatePage";

export default function App() {
    return (
        <div className={styles.App}>
            <BrowserRouter>
                <Nav />
                <Routes>
                    <Route path="/stickur/" element={<HomePage />} />
                    <Route path="/stickur/create" element={<CreatePage />} />
                </Routes>
                <HomePage />
                <Footer />
            </BrowserRouter>
        </div>
    );
}
