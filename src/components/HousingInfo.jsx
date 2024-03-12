import "../assets/css/main.css";
import HousingTitle from "./HousingTitle";
import HousingHost from "./HousingHost";
import HousingTags from "./HousingTags";
import HousingRating from "./HousingRating";
import Collapse from "./Collapse";


function HousingInfo({ info }) {
    return (
        <section className="housingInfo">
            <div className="housingInfo__top">
                <HousingTitle title={info.title} location={info.location} />
                <HousingHost host={info.host} />
            </div>
            <div className="housingInfo__middle">
                <HousingTags tags={info.tags} />
                <HousingRating rating={info.rating} />
            </div>
            <div className="housingInfo__bottom">
                <Collapse title="Description" text={info.description}/>
                <Collapse title="Équipement" text={info.equipments}/>
            </div>
        </section>
    );
}

export default HousingInfo;