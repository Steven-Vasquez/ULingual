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
    <p><span>Description: </span>{props.desc}</p>
    <p><span>Availability: </span>{props.avab}</p>
    <p><span>Cost: </span>{props.cost}</p>
    </div>

        
    </div>

    
       
    );
}

export default TutorCard;