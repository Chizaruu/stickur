import { useState, useEffect } from "react";
import styles from "./HomePage.module.scss";
import { getAllStickurs } from "../../services/stickurs";
import { Link } from "react-router-dom";
import Carousel from "../../components/Carousel/Carousel";

export function HomePage() {
    const [stickurs, setStickurs] = useState([]);
    const [category, setCategory] = useState("all");

    const handleCategoryChange = (e) => {
        setCategory(e.target.value);
    };

    useEffect(() => {
        (async () => {
            setStickurs(await getAllStickurs());
        })();
    }, []);
    return (
        <main className={styles.main}>
            <Carousel stickurs={stickurs} />
            <div className={styles.wrapper}>
                <div className={styles.button_container}>
                    <button value="all" onClick={handleCategoryChange}>
                        All
                    </button>
                    <button value="cute" onClick={handleCategoryChange}>
                        Cute
                    </button>
                    <button value="meme" onClick={handleCategoryChange}>
                        Meme
                    </button>
                    <button value="favourite" onClick={handleCategoryChange}>
                        Favourites
                    </button>
                </div>
                <div className={styles.stickurs}>
                    {stickurs.length &&
                        stickurs.map((stickur, idx) => {
                            if (
                                category === "all" ||
                                stickur.category === category ||
                                (category === "favourite" && stickur.favourite)
                            ) {
                                return (
                                    <div className={styles.stickur} key={idx}>
                                        <div className={styles.stickur__image}>
                                            <Link to={`/stickur/${stickur.id}`}>
                                                <img
                                                    src={stickur.imageUrl}
                                                    alt={stickur.name}
                                                />
                                            </Link>
                                        </div>
                                        <div className={styles.stickur__info}>
                                            <h2>{stickur.name}</h2>
                                            <p>${stickur.price}</p>
                                            <Link to={`/stickur/${stickur.id}`}>
                                                <button>View</button>
                                            </Link>
                                        </div>
                                    </div>
                                );
                            } else {
                                return null;
                            }
                        })}
                </div>
            </div>
        </main>
    );
}
