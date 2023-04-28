import React from "react";
import './stylesheets/SelectLanguage.css'
import { Link } from "react-router-dom";



const SelectLanguage = () => {
    return(
        <div className="lang-select-page">
            <h2>Select Languages</h2>
            <div className="language-selection">
                <ul>
                    <li>English <input type={"checkbox"}/></li>
                    <li>Korean <input type={"checkbox"}/></li>
                    <li>Spanish <input type={"checkbox"}/></li>
                    <li>French <input type={"checkbox"}/></li>
                    <li>Arabic <input type={"checkbox"}/></li>
                </ul>
            </div>
            <label>
                <Link to="/UserProfile">
                    Done
                </Link>
            </label>
        </div>
    );
}
export default SelectLanguage;