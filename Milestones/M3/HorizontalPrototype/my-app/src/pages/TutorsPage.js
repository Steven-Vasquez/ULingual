import React,{useState} from "react"
import './stylesheets/Tutors.css';
import TutorCard from "../components/TutorCard";
import TutorProfile from "../components/TutorProfile";
import { Link } from "react-router-dom";

const Tutors = () => {

    return(
        <div className="pg">
            <h1>Tutors Page</h1>
            <div className="tutor-display">
                <div className="wrapper">
                    <div className="tutor-1">
                        <img src={"https://placehold.jp/150x150.png"}/>
                        <ul>
                            <li>
                                <Link to="/TutorProfile">
                                    <label>Tutor Name</label>
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="tutor-1-desc">
                        <p>Description:</p>
                        <p>Availability:</p>
                        <p>Cost:</p>
                    </div>

                    <div className="tutor-2">
                        <img src={"https://placehold.jp/150x150.png"}/>
                        <ul>
                            <li>
                                 <Link to="/TutorProfile">
                                    <label>Tutor Name</label>
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="tutor-2-desc">
                        <p>Description:</p>
                        <p>Availability:</p>
                        <p>Cost:</p>
                    </div>

                    <div className="tutor-3">
                        <img src={"https://placehold.jp/150x150.png"}/>
                        <ul>
                            <li>
                                <Link to="/TutorProfile">
                                    <label>Tutor Name</label>
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="tutor-3-desc">
                        <p>Description:</p>
                        <p>Availability:</p>
                        <p>Cost:</p>
                    </div>


                </div>
            </div>
        </div>
    );
}
export default Tutors;