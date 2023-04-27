import React, { useState, useEffect} from 'react'
import axios from 'axios'
import { useLocation } from 'react-router-dom';

import './stylesheets/SearchResults.css'
import queryString from 'query-string';

const Results = () => {
  const location = useLocation();
  const queryParams = queryString.parse(location.search);

  console.log(queryParams.search);

  const [tutors, setTutors] = useState([]);

    useEffect(() => {
      axios.get(`http://localhost:3001/tutors/search?search=${queryParams.search}`)
        .then(res => {
          setTutors(res.data);
          console.log("Tutors retrieved via search");
        })
        .catch(err => {
          console.log("Error: Tutors not retrieved via search");
          console.log(err);
        });
    }, []);
    console.log(tutors);

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