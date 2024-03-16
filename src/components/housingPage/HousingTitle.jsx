import "../../assets/css/main.css";

function HousingTitle(props) {
    return (
        <article className="housingTitle">
            <h1 >{props.title}</h1>
            <p>{props.location}</p>
        </article>
    );
}

export default HousingTitle;