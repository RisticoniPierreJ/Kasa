import "../assets/css/main.css";
import adsData from "../datas/adsData";

function Ads() {
    return (
        <>
            {adsData.map((ad, index) => (
                <a href="#" key={index}>
                    <article className="ads" >
                        <img src={ad.cover} alt={ad.title} className="ads__img" />
                        <h2 className="ads__title">{ad.title}</h2>
                    </article>
                </a>
            ))}
            
        </>
    );
}

export default Ads;
