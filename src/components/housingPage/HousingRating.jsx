import "../../assets/css/main.css";

function HousingRating({ rating, className }) {
    return (
        <div className= {`rating ${className}`}>
            {[...Array(5)].map((_, i) => (
                <i key={i} className={i < rating ? "fas fa-star" : "fas fa-star empty"}></i>
                // <i key={i} className={i < rating ? "fas fa-star" : "far fa-star"}></i>
            ))}
        </div>
    );
}

export default HousingRating;