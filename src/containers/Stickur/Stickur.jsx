import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { findById, updateRecord } from "../../services/stickurs";
import styles from "./Stickur.module.scss";
import { CartContext } from "../../context/CartProvider";

export default function Stickur() {
    const { cart } = useContext(CartContext);
    const [stickur, setStickur] = useState(null);
    const [quantity, setQuantity] = useState(1);
    const { id } = useParams();

    const handleFavourite = () => {
        const newStickur = { ...stickur };
        newStickur.favourite = !newStickur.favourite;
        updateRecord(id, newStickur);
        setStickur(newStickur);
    };

    const handleAddToCart = () => {
        cart.addToCart(stickur);
    };

    const handleQuantityChange = (e) => {
        setQuantity(e.target.value);
    };

    useEffect(() => {
        (async () => {
            setStickur(await findById(id));
        })();
    }, [id]);

    if (stickur)
        return (
            <main className={styles.main}>
                <div className={styles.wrapper}>
                    <div className={styles.stickur}>
                        <div className={styles.stickur__image}>
                            <img src={stickur.imageUrl} alt={stickur.name} />
                        </div>
                        <div className={styles.stickur__info}>
                            <h2>{stickur.name}</h2>
                            <div>
                                <div>
                                    <label htmlFor="size">Size:</label>
                                    <select id="size">
                                        <option
                                            value="S"
                                            defaultValue={stickur.size === "S"}
                                        >
                                            {stickur.size === "S"
                                                ? "S"
                                                : "S (Not Available)"}
                                        </option>
                                        <option
                                            value="M"
                                            defaultValue={stickur.size === "M"}
                                        >
                                            {stickur.size === "M"
                                                ? "M"
                                                : "M (Not Available)"}
                                        </option>
                                        <option
                                            value="L"
                                            defaultValue={stickur.size === "L"}
                                        >
                                            {stickur.size === "L"
                                                ? "L"
                                                : "L (Not Available)"}
                                        </option>
                                    </select>
                                </div>
                                <div>
                                    <label htmlFor="quantity">Quantity:</label>
                                    <input
                                        id="quantity"
                                        type="number"
                                        min="1"
                                        max={stickur.quantity}
                                        value={quantity}
                                        onChange={handleQuantityChange}
                                    />
                                </div>
                            </div>

                            <p>${stickur.price * quantity}</p>
                            <div className={styles.stickur__actions}>
                                <button
                                    type="button"
                                    onClick={handleAddToCart}
                                    disabled={stickur.quantity === 0}
                                >
                                    Add to Cart
                                </button>
                                <button
                                    type="button"
                                    onClick={handleFavourite}
                                    disabled={stickur.quantity === 0}
                                >
                                    {stickur.favourite
                                        ? "Remove from Favourites"
                                        : "Add to Favourites"}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        );
    return null;
}
