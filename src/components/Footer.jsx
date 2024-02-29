import leterK from "../assets/images/logos/K.svg";
import houseLogo from "../assets/images/logos/house.svg";
import leterS from "../assets/images/logos/S.svg";
import leterA from "../assets/images/logos/A.svg";
import "../assets/css/main.css";

function Footer() {

    return (
        <>
            <footer className="footer">
                <div className="footer_logo">
                    <img src={leterK} alt="Lettre K" className="footer_logo-letterMaj" />
                    <img src={houseLogo} alt="House Logo" className="footer_logo-letter" />
                    <img src={leterS} alt="Lettre S" className="footer_logo-letter" />
                    <img src={leterA} alt="Lettre A" className="footer_logo-letter" />
                </div>
                <p className="footer_txt">© 2020 Kasa. All rights reserved</p>
            </footer>
        </>
    );
}

export default Footer;
