import React from "react";
import Banner from "../Banner";
import Collapse from "../Collapse";
import aboutBannerImg from "../../assets/images/photos/aboutBannerImg.jpeg";
import aboutArticlesData from "../../constants/aboutArticlesData";
// import { Outlet } from "react-router-dom";

function About() {
    return (
        <div className="aboutContainer__main">
            <Banner image={aboutBannerImg} />
            {/* <Banner image={aboutBannerImg} showText={false} /> */}
            <section className="collapseAll">
                {aboutArticlesData.map((data, index) => (
                    <Collapse key={index} title={data.title} text={data.text} />
                ))}
            </section>
            {/* <Outlet /> */}
        </div>
    );
}

export default About;
