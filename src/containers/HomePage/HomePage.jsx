import { useState, useEffect } from "react";
import styles from "./HomePage.module.scss";
import { getAllStickurs } from "../../services/stickurs";

export function HomePage() {
    const [stickurs, setStickurs] = useState([]);

    useEffect(() => {
        (async () => {
            setStickurs(await getAllStickurs());
        })();
    }, []);
    return (
        <main className={styles.main}>
            <div className={styles.wrapper}>
                <div className={styles.stickurs}>
                    {stickurs.length &&
                        stickurs.map((stickur, idx) => {
                            return (
                                <div key={idx}>
                                    <p>
                                        {stickur.id} - {stickur.name} -{" "}
                                        {stickur.price} - {stickur.quantity} -{" "}
                                        {stickur.size} - {stickur.imageUrl} -{" "}
                                        {stickur.favourite}
                                    </p>
                                </div>
                            );
                        })}
                </div>
            </div>
        </main>
    );
}
