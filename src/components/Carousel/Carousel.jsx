import styles from "./Carousel.module.scss";
import { Link } from "react-router-dom";

export default function Carousel({ stickurs }) {
    return (
        <div>
            <h2 className={styles.title}>Trending now</h2>
            <div className={styles.outer_box}>
                {stickurs.length &&
                    stickurs.map((stickur, idx) => {
                        return (
                            <div className={styles.inner_box} key={idx}>
                                <Link to={`/stickur/${stickur.id}`}>
                                    <img
                                        src={stickur.imageUrl}
                                        alt={stickur.name}
                                    />
                                    <p>{stickur.name}</p>
                                </Link>
                            </div>
                        );
                    })}
            </div>
        </div>
    );
}
