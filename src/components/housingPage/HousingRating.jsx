function HousingRating({rating}) {
    return (
        <div className= "housingRating">

            {[...Array(5)].map((_, i) => (
                <i key={i} className={i < rating ? "fas fa-star" : "fas fa-star empty"}></i>
            ))}
            
        </div>
    );
}

export default HousingRating;