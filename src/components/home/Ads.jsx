import "../../assets/css/main.css";
import { NavLink } from "react-router-dom";
import adsData from "../../datas/adsData";

function Ads() {
    return (
        <>
            {adsData.map((ad, index) => (
                <NavLink to={`/logement/${ad.id}`} key={index}>
                    <article className="ads" >
                        <img src={ad.cover} alt={ad.title} className="ads__img" />
                        <h2 className="ads__title">{ad.title}</h2>
                    </article>
                </NavLink>
            ))}
        </>
    );
}

export default Ads;