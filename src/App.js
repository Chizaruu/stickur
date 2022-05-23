import React from "react";
import styles from "./App.module.scss";
import { Footer } from "./containers/Footer/Footer";
import { HomePage } from "./containers/HomePage/HomePage";
import { Nav } from "./containers/Nav/Nav";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CreatePage from "./containers/CreatePage/CreatePage";
import Stickur from "./containers/Stickur/Stickur";
import { CartProvider } from "./context/CartProvider";

export default function App() {
    return (
        <CartProvider>
            <div className={styles.App}>
                <BrowserRouter>
                    <Nav />
                    <Routes>
                        <Route path="/stickur/" element={<HomePage />} />
                        <Route
                            path="/stickur/create"
                            element={<CreatePage />}
                        />
                        <Route path="/stickur/:id" element={<Stickur />} />
                    </Routes>
                    <Footer />
                </BrowserRouter>
            </div>
        </CartProvider>
    );
}
