import HousingTitle from "./HousingTitle";
import HousingHost from "./HousingHost";
import HousingTags from "./HousingTags";
import HousingRating from "./HousingRating";
import Collapse from "../UI/Collapse";

function HousingInfo({ info }) {
    return (
        <section className="housingInfo">
            <div className="housingInfo__top">

                <div className="housingInfo__titleTags">
                    <HousingTitle title={info.title} location={info.location} />
                    <HousingTags tags={info.tags} />
                </div>

                <div className="housingInfo__hostRating">
                    <HousingHost host={info.host}  />
                    <HousingRating rating={info.rating} />
                </div>

            </div>

            <div className="housingInfo__bottom">
                <Collapse title="Description" text={info.description} />
                <Collapse title="Équipement" text={info.equipments} />
            </div>

        </section>
    );
}

export default HousingInfo;