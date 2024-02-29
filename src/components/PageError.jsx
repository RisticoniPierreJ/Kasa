import { NavLink, useRouteError } from "react-router-dom";

function PageError() {
    const error = useRouteError();
    return (
        <>
            <h1>ERREUR 404 CETTE PAGE N'EXISTE PAS</h1>
            <p>{error?.error?.toString() ?? error?.toString()}</p>
            {/* => Si il y a un erreur, et qu'elle contient une clé error on utilise toString pour l'afficher, sinon on prend l'erreur originale et on si elle existe on l'affiche avec toString */}
            <NavLink to="/">Retour à l'accueil</NavLink>
        </>
    );
}

export default PageError;
