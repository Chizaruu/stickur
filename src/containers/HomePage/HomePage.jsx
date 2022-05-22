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
            <div>
                {stickurs.length &&
                    stickurs.map((stickur, idx) => {
                        return (
                            <div key={idx}>
                                <p>
                                    {stickur.id} - {stickur.flavourName} -{" "}
                                    {stickur.creationStatus}
                                </p>
                            </div>
                        );
                    })}
            </div>
        </main>
    );
}
