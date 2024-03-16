import "../assets/css/main.css";
import { useParams } from "react-router-dom";
import adsData from "../datas/adsData";
import HousingInfo from "../components/housingPage/HousingInfo";
import Carousel from "../components/layout/Carousel";
import PageError from "./PageError";

function Housing() {
    const { id } = useParams();
    const ad = adsData.find((ad) => ad.id === id);
    // const ad = adsData.find((ad) => ad.id === Number(id));

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
