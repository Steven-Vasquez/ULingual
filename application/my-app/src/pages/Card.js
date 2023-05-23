import React, {useState} from "react";

import './stylesheets/FlashCards.css'

function Card({frontside, backside}){
    const [isFront, changeFace] = useState(true); 
    function handleClick() {
        changeFace(oldState => !oldState);
    }
    const text = isFront ? frontside : backside;
    const sideClass = isFront ? "front" : "back";
    const classList = `flash-card ${sideClass}`;

    return <div className= {classList} onClick={handleClick}>{text}</div>
}
export default Card;
