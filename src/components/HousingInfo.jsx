import "../assets/css/main.css";
import HousingTitle from "./HousingTitle";
import HousingHost from "./HousingHost";
import HousingTags from "./HousingTags";
import HousingRating from "./HousingRating";

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
            {/* <div className="housingInfo__bottom">

            </div> */}
        </section>
    );
}

export default HousingInfo;