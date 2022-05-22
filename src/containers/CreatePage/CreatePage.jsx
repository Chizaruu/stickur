import { createRecord } from "../../services/stickurs";
import styles from "./CreatePage.module.scss";

const CreatePage = () => {
    const handleSubmit = async (e) => {
        e.preventDefault();

        const form = new FormData(e.target);

        let formObj = {};

        for (let key of form.keys()) {
            formObj[key] = form.get(key);
        }

        await createRecord(formObj);
        e.target.reset();
    };

    return (
        <div className={styles.CreatePage}>
            <div>
                <h2>Create a stickur</h2>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="quantity">Quantity:</label>
                        <input
                            id="quantity"
                            name="quantity"
                            type="number"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="size">Size:</label>
                        <input id="size" name="size" type="text" required />
                    </div>
                    <div>
                        <label htmlFor="price">Price:</label>
                        <input id="price" name="price" type="number" required />
                    </div>
                    <div>
                        <label htmlFor="name">Name:</label>
                        <input id="name" name="name" type="text" required />
                    </div>
                    <div>
                        <label htmlFor="imageUrl">ImageUrl:</label>
                        <input
                            id="imageUrl"
                            name="imageUrl"
                            type="text"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="favourite">Favourite:</label>
                        <input
                            id="favourite"
                            name="favourite"
                            type="checkbox"
                            required
                        />
                    </div>

                    <button type="submit">Submit Data</button>
                </form>
            </div>
        </div>
    );
};

export default CreatePage;
