import React from "react";
import './ResultsPage.css'

const Results = () => {
    return(
        <div className="Seach-Results">
            <h2>Search from Database</h2>
            <div className="search-bar">
                <input type="text" placeholder="Seach Users or Tutors..." id="search Input">
                </input>
            </div>
            <ul>
                 <li>test</li>
                 <li>test</li>
                 <li>test</li>
                 <li>test</li>
            </ul>
        </div>
    );

}

export default Results;