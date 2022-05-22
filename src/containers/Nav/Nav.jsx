import styles from "./Nav.module.scss";
import { Link } from "react-router-dom";

import instagram from "./images/instagram.png";
import facebook from "./images/facebook.png";
import cart from "./images/cart.png";

export function Nav() {
    return (
        <nav className={styles.navbar}>
            <div>
                <div>
                    <Link to="/">Shop</Link>
                    <Link to="/create">Create</Link>
                    <Link to="/about">About</Link>
                    <Link to="/contact">Contact</Link>
                </div>
                <div>
                    <h1>
                        <Link to="/">Stickur</Link>
                    </h1>
                </div>
            </div>
            <div>
                <div>
                    <a href="https://www.instagram.com/stickurs/">
                        <img src={instagram} alt="instagram" />
                    </a>
                    <a href="https://www.facebook.com/stickurs/">
                        <img src={facebook} alt="facebook" />
                    </a>
                </div>
                <div>
                    <Link to="/cart">
                        <img src={cart} alt="cart" />
                        <span className={styles.cartCount}>0</span>
                    </Link>
                </div>
            </div>
        </nav>
    );
}
