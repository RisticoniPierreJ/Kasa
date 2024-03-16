import "../assets/css/main.css";
import { NavLink } from "react-router-dom";


function PageError() {
    return (
    
        <div className="pageError__container">
            <h1 className="pageError__title">404</h1>
            <p className="pageError__txt">Oups! La page que vous demandez n'existe pas.</p>
            <NavLink className="pageError__link" to="/">Retourner sur la page d'accueil</NavLink>
        </div>
        
    );
}

export default PageError;
