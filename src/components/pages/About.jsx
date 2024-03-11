import React from 'react';
import Banner from "../Banner";
import aboutBannerImg from "../../assets/images/photos/aboutBannerImg.jpeg";
import Collapse from "../Collapse";
import { Outlet } from 'react-router-dom';

function About() {
    return (
        <div className="aboutContainer__main">
            <Banner image={aboutBannerImg} showText={false} />
            <Collapse />
            <Outlet />
        </div>
    );
}

export default About;


