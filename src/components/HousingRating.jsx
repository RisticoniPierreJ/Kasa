import "../assets/css/main.css";


import "../assets/css/main.css";

function HousingRating({ rating }) {
    return (
        <div className="rating">
            {[...Array(5)].map((_, i) => (
                <i key={i} className={i < rating ? "fas fa-star" : "fas fa-star empty"}></i>
                // <i key={i} className={i < rating ? "fas fa-star" : "far fa-star"}></i>
            ))}
        </div>
    );
}

export default HousingRating;