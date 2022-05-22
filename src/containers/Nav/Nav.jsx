import styles from "./Nav.module.scss";
import { Link } from "react-router-dom";

import instagram from "./images/instagram.png";
import facebook from "./images/facebook.png";
import cart from "./images/cart.png";

export function Nav() {
    return (
        <nav className={styles.navbar}>
            <div className={styles.navbar__links}>
                <Link to="/stickur/">Shop</Link>
                <Link to="/stickur/create">Create</Link>
                <Link to="/stickur/about">About</Link>
                <Link to="/stickur/contact">Contact</Link>
            </div>
            <div className={styles.navbar__title}>
                <Link to="/stickur/">
                    <h2>Stickur</h2>
                </Link>
            </div>
            <div className={styles.navbar__wrapper}>
                <div>
                    <a href="https://www.instagram.com/stickur/">
                        <img src={instagram} alt="instagram" />
                    </a>
                    <a href="https://www.facebook.com/stickur/">
                        <img src={facebook} alt="facebook" />
                    </a>
                </div>
                <Link to="/cart">
                    <img src={cart} alt="cart" />
                    <span>0</span>
                </Link>
            </div>
        </nav>
    );
}
