import bannerImg from "../assets/images/photos/banner.jpeg";
import "../assets/css/main.css";

function Banner() {
    return (
        <>
            <div className="banner">
                <img src={bannerImg} alt="Paysage de la bannière" className="banner_img" />
                <p className="banner_txt">Chez vous, partout et ailleurs</p>
            </div>
        </>
    );
}

export default Banner;
