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

// // Home.jsx
// import React from 'react';
// import Banner from "../Banner";
// import homeBannerImg from "../../assets/images/photos/homeBannerImg.jpeg";

// function Home({ showBanner }) {
//     return (
//         <div className="homeContainer__main">
//             {showBanner && <Banner image={homeBannerImg} showText={true} />}
//         </div>
//     );
// }

// export default Home;
