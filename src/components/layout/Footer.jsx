import logoFooter from "../../assets/images/logos/logoFooter.svg";

function Footer() {
    return (
        <>
            <footer className="footer">
                <div className="footer__content">
                    <img src={logoFooter} alt="logoFooter" />
                    <p className="footer_txt">
                        © 2020 Kasa. All rights reserved
                    </p>
                </div>
            </footer>
        </>
    );
}

export default Footer;