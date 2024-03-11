import "../assets/css/main.css";
import aboutArticlesData from "../constants/aboutArticlesData";

function Collapse() {
    return (
        <article className="collapseAll">
            {aboutArticlesData.map((article, index) => (
                <div key={index} className="collapse">
                    <div className="collapse__title">
                        <h1>{article.title}</h1>
                        <i className="fa-solid fa-chevron-down"></i>
                    </div>
                    <p className="collapse__txt">{article.text}</p>
                </div>
            ))}
        </article>
    );
}

export default Collapse;
