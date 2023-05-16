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
      if(queryParams.search) {
        axios.get(`https://50.18.108.83.nip.io:3001/tutors/search?search=${queryParams.search}`)
          .then(res => {
            setTutors(res.data);
            console.log("Tutors retrieved via search");
          })
          .catch(err => {
            console.log("Error: Tutors not retrieved via search");
            console.log(err);
          });
      }
    },[]);
    console.log(tutors);
    return(
    <div className='sr-pg'>
      <div className="Seach-Results">
        <h2>Results from Database</h2>
        <div>
          <ul>
            {tutors.map(tutor => (
              <li key={tutor.TutorID}>
                <h3>{tutor.TutorFirstName} {tutor.TutorLastName}'s Contact Information:</h3>
                <p>Email: {tutor.TutorEmail}</p>
                <p>Phone Number: {tutor.TutorPhone}</p>
              </li>
              ))}
          </ul>
        </div>
      </div>
    </div>
    );

}

export default Results;