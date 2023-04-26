import React,{useState} from "react"
import './StyleSheets/ComingSoon.css';
import TutorCard from "../components/TutorCard";
import TutorProfile from "../components/TutorProfile";

const Tutors = () => {
    const[isProfileView,setIsProfileView]= useState(false);
    return(
        <div className="pg">
            <div class="middle">
            <h1>Tutors</h1>
            {isProfileView===false?
            <TutorCard setIsProfileView={setIsProfileView} img={"https://placehold.jp/150x150.png"} name={"Amal Ahmed"} desc={"Arabic tutor"} avab={"Mon-Thur"} cost={"40"}/>
            :
            <TutorProfile setIsProfileView={setIsProfileView} img={"https://placehold.jp/150x150.png"} name={"Amal Ahmed"} desc={"Arabic tutor"} avab={"Mon-Thur"} cost={"40"}/>
        }
            </div>
        </div>
    );
}
export default Tutors;