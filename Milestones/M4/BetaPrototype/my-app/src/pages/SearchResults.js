import React, { useState, useEffect} from 'react'
import axios from 'axios'
import { useLocation } from 'react-router-dom';

import './stylesheets/SearchResults.css'
import queryString from 'query-string';

const Results = () => {
  const location = useLocation();
  const queryParams = queryString.parse(location.search);
  var pageLoaded = true;

  console.log(queryParams.search);

  const [users, setUsers] = useState([]);

  useEffect(() => {
      if(pageLoaded && queryParams.search) {
        //axios.get(`https://50.18.108.83.nip.io:3001/user/search?search=${queryParams.search}`)
        axios.get(`http://localhost:3001/user/search?search=${queryParams.search}`)
          .then(res => {
            if(res.data.message) {
              alert(res.data.message);
            } else {
              setUsers(res.data);
              console.log("Users retrieved via search");
            }
          })
          .catch(err => {
            console.log("Error: Users not retrieved via search");
            console.log(err);
          });
      }
      pageLoaded = false;
    },[]);
    console.log(users);
    return(
    <div className='sr-pg'>
      <div className="Seach-Results">
        <h2>Results from Database</h2>
        <div>
          <ul>
            {users.map(user => (
              <li key={user.UserID}>
                <h3>Username: {user.Uusername} || Native Language: {user.Language}</h3>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
    );

}

export default Results;