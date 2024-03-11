import "../assets/css/main.css";

function HousingTags({ tags }) {
    return (
        <article className="tags">
            <ul>
                {tags.map((tag, index) => (
                    <li key={index}>{tag}</li>
                ))}
            </ul>
        </article>
    );
}

export default HousingTags;