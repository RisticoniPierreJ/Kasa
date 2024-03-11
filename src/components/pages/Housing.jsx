// import "../assets/css/main.css";
import "../../assets/css/main.css";

import { useParams } from "react-router-dom";
import adsData from "../../datas/adsData";
import HousingInfo from "../HousingInfo";

function Housing() {
    const { id } = useParams();
    const ad = adsData.find((ad) => ad.id === id);
    // const ad = adsData.find((ad) => ad.id === Number(id));

    // If no ad was found, render a message
    if (!ad) {
        return <div>Ad not found</div>;
    }

    // Render the HousingInfo component and pass the ad as a prop
    return (
        <div className="housingContainer">
            <HousingInfo info={ad} />
        </div>
    );
    
}

export default Housing;
