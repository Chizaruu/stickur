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
                        <label htmlFor="flavourName">Flavour Name</label>
                        <input
                            id="flavourName"
                            name="flavourName"
                            type="text"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="creationStatus">Creation Status</label>
                        <input
                            id="creationStatus"
                            name="creationStatus"
                            type="text"
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
