import Banner from "../Banner";
import homeBannerImg from "../../assets/images/photos/homeBannerImg.jpeg";
import AdsContainer from "../AdsContainer"

function Home() {
    return (
        <div className="homeContainer__main">
            <Banner image={homeBannerImg} showText={true} />
            <AdsContainer />
        </div>
    );
}

export default Home;
