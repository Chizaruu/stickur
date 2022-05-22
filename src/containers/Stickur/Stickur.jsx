import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { findById } from "../../services/stickurs";

export function Stickur() {
    const [stickur, setStickur] = useState(null);
    const { id } = useParams();

    useEffect(() => {
        (async () => {
            setStickur(await findById(id));
        })();
    }, [id]);

    if (stickur)
        return (
            <p>
                {stickur.id} - {stickur.name} - {stickur.price} -{" "}
                {stickur.quantity} - {stickur.size} - {stickur.imageUrl} -{" "}
                {stickur.favourite}
            </p>
        );

    return (
        <p>
            Record with {"=>"} {id} could not be found
        </p>
    );
}
