import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import teamData from './TeamData';

function App() {
  return (
    <BrowserRouter>
      <div style={{textAlign: 'center'}}>
        <h1>Software Engineering Class SFSU</h1>
        <h1>Spring 2023</h1>
        <h1>Section 5</h1>
        <h1>Team 6</h1>

        <ul style={{listStyleType: 'none'}}>
          {teamData.map((member, index) => (
            <li key={index}>
              <Link to={`/team/${index}`}>
                <a>{member.name}'s introduction</a>
              </Link>
            </li>
          ))}
        </ul>

        <Routes>
          {teamData.map((member, index) => (
            <Route key={index} path={`/team/${index}`} element={<MemberPage member={member} />} />
          ))}
        </Routes>
      </div>
    </BrowserRouter>
  );
}

function MemberPage(props) {
  const { member } = props;

  return (
    <div>
      <h2>{member.name}'s introduction</h2>
      <h3>Role: {member.role}</h3>
      <p>{member.intro}</p>
    </div>
  );
}

export default App;