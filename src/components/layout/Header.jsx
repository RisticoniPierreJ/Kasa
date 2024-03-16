import "../../assets/css/main.css";
import { useLocation, Link } from "react-router-dom";
import logo from "../../assets/images/logos/logo.svg";

function Header() {
    const location = useLocation();

    return (
        <>
            <header className="header">
                <img src={logo} alt="Logo Kasa" />
                <nav className="header_nav">
                    <Link to="/" className={location.pathname === "/" ? 'header__navLink-active' : ''}>ACCUEIL</Link>
                    <Link to="/apropos" className={location.pathname === "/apropos" ? 'header__navLink-active' : ''}>À PROPOS</Link>
                </nav>
            </header>
        </>
    );
}

export default Header;