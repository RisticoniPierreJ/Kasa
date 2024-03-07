import { NavLink } from "react-router-dom";
// import { NavLink, useRouteError } from "react-router-dom";
import "../../assets/css/main.css";


function PageError() {
    // const error = useRouteError();
    return (
    
            <div className="pageError__container">
                <h1 className="pageError__title">404</h1>
                <p className="pageError__txt">Oups! La page que vous demandez n'existe pas.</p>

                {/* <p>{error?.error?.toString() ?? error?.toString()}</p> */}
                {/* => Si il y a un erreur, et qu'elle contient une clé error on utilise toString pour l'afficher, sinon on prend l'erreur originale et on si elle existe on l'affiche avec toString */}

                <NavLink className="pageError__link" to="/">Retourner sur la page d'accueil</NavLink>
            
            </div>
        
    );
}

export default PageError;
