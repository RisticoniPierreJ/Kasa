import "../assets/css/main.css";
import aboutArticlesData from "../constants/aboutArticlesData";

function AboutArticles() {
  return (
    <article className="aboutArticleAll">
      {aboutArticlesData.map((article, index) => (
        <div key={index} className="aboutArticle">
          <div className="aboutArticle__title">
            <h1>{article.title}</h1>
            <i className="fa-solid fa-chevron-down"></i>
          </div>
          <p className="aboutArticle__txt">{article.text}</p>
        </div>
      ))}
    </article>
  );
}

export default AboutArticles;

