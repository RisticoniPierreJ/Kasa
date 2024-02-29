import { useParams } from "react-router-dom";

function Single() {
    const { id } = useParams();
    return (
        <div>
            <h1>Logement numéro : { id } </h1>
        </div>
    );
}

export default Single;
