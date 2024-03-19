import Banner from "../components/UI/Banner";
import Collapse from "../components/UI/Collapse";
import aboutBannerImg from "../assets/images/photos/aboutBannerImg.jpeg";
import aboutArticlesData from "../datas/aboutArticlesData";

function About() {
    return (
        <div className="aboutContainer__main">
            <Banner image={aboutBannerImg} />
            <section className="collapseAll">
                {aboutArticlesData.map((data, index) => (
                    <Collapse key={index} title={data.title} text={data.text} />
                ))}
            </section>
        </div>
    );
}

export default About;