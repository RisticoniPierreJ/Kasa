import HousingInfo from "../components/housingPage/HousingInfo";
import Carousel from "../components/UI/Carousel";
import PageError from "./PageError";
import adsData from "../datas/adsData";
import { useParams } from "react-router-dom";

function Housing() {
    const { id } = useParams();
    const ad = adsData.find((ad) => ad.id === id);

    if (!ad) {
        return <PageError />;
    }

    // Rendu de HousingInfo avec ad comme prop
    return (
        <div className="housingContainer__main">
            <Carousel pictures={ad.pictures} />
            <HousingInfo info={ad} />
        </div>
    );
}

export default Housing;