import leftArrow from "../../assets/images/icons/leftArrow.svg";
import rightArrow from "../../assets/images/icons/rightArrow.svg";
import React, { useState } from "react";

function Carousel({ pictures }) {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const goLeft = () => {
        setCurrentImageIndex((oldIndex) => {
            return oldIndex === 0 ? pictures.length - 1 : oldIndex - 1;
        });
    };

    // Proposition de Copilot pour goRight //
    // const goRight = () => {
    //     setCurrentImageIndex((oldIndex) => (oldIndex + 1) % pictures.length);
    // };
    const goRight = () => {
        setCurrentImageIndex((oldIndex) => {
            return oldIndex + 1 >= pictures.length ? 0 : oldIndex + 1;
        });
    };

    return (
        <div className="carousel">
            <img
                className="carousel__img"
                src={pictures[currentImageIndex]}
                alt="carousel"
            />

            {/* Condition pour afficher le compteur uniquement si nb photo > 1  */}
            {pictures.length > 1 && (
            <>
                <div className="carousel__counter">{currentImageIndex + 1}/{pictures.length}</div>
                <div className="arrows">
                    <img
                        src={leftArrow}
                        alt="leftArrow"
                        className="arrows__left"
                        onClick={goLeft}
                    />
                    <img
                        src={rightArrow}
                        alt="rightArrow"
                        className="arrows__right"
                        onClick={goRight}
                    />
                </div>
            </>
        )}
        </div>
    );
}

export default Carousel;