import React from 'react'
import "./stylesheets/TutorCard.css"


function TutorCard(props) {
    console.log("TutorCard props:", props)
    return(
    <div className='TutorsCard' onClick={()=>props.setIsProfileView(true)}>
        <div className="ProfileImage">
            <img src={props.img}/>
            <h5>{props.name}</h5>
            </div>
            <div className="ProfileDesc">
            <p>Description: {props.desc}</p>
            <p>Availability: {props.avab}</p>
            <p>Cost: {props.cost}</p>
        </div> 
    </div>




    );
}

export default TutorCard;