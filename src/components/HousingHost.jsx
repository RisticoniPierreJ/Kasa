import "../assets/css/main.css";

function HousingHost({ host }) {
    return (
        <article className="host">
            <div className="host__name">
              <p>{host.name}</p>
            </div>
            <div className="host__image">
                <img src={host.picture} alt="host" />
            </div>
        </article>
    );
}

export default HousingHost;