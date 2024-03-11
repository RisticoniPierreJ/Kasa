// import { NavLink, Outlet } from "react-router-dom";
import { NavLink } from "react-router-dom";
import logo from "../assets/images/logos/LOGO.svg";
import "../assets/css/main.css";

function Header() {
    return (
        <>
            <header className="header">
                <img src={logo} alt="Logo Kasa" />
                <nav className="header_nav">
                    <NavLink to="/">Acceuil</NavLink>
                    {/* <NavLink to="/logement">Logements</NavLink> */}
                    <NavLink to="/apropos">À Propos</NavLink>
                </nav>
            </header>
        </>
    );
}

export default Header;
