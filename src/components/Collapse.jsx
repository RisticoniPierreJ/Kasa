
import React, { useState } from "react";
import "../assets/css/main.css";

function Collapse(props) {
    const title = props.title;
    const text = props.text;
    const [isContentShown, setIsContentShown] = useState(false);

    const showContent = () => {
        setIsContentShown(!isContentShown);
    };

    return (
        <div className="collapse">
            <div className="collapse__title" onClick={showContent}>
                <h1>{title}</h1>
                <i className={`fa-solid fa-chevron-up ${isContentShown ? "" : "rotate"}`}></i>
            </div>
            <div className={`collapse__txt ${isContentShown ? "show" : ""}`}>
                <div className="collapse__txt-inner">{text}</div>
            </div>
        </div>
    );
}

export default Collapse;

