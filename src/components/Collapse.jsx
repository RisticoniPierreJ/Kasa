// import React, { useState } from "react";

// import "../assets/css/main.css";

// function Collapse(props) {
//     const title = props.title;
//     const text = props.text;
//     const [isContentShown, setIsContentShown] = useState(false);
//     const [isRotated, setIsRotated] = useState(false);

//     const showContent = () => {
//         setIsContentShown(!isContentShown);
//         setIsRotated(!isRotated);
//     };

//     return (
//         <div className="collapse">
//             <div className="collapse__title" onClick={showContent}>
//                 <h1>{title}</h1>
//                 <i className={`fa-solid fa-chevron-up ${isRotated ? "rotateUp":"rotateDown"}`}></i>
//             </div>
//             <p className={`collapse__txt ${isContentShown ? "slideDown" : "slideUp"}`}>{text}</p>
//         </div>
//     );

//     // return (
//     //     <div className="collapse">
//     //         <div className="collapse__title" onClick={showContent}>
//     //             <h1>{title}</h1>
//     //             <i className={`fa-solid fa-chevron-up ${isRotated ? 'rotate' : ''}`}></i>
//     //             {/* <i className="fa-solid fa-chevron-up"></i> */}
//     //         </div>
//     //         {isContentShown && <p className="collapse__txt">{text}</p>}
//     //     </div>
//     // );
// }

// export default Collapse;



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

