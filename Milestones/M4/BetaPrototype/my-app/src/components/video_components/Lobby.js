import React, { useState } from "react";
import './stylesheets/lobby.css'
import { Link } from "react-router-dom";
//import VideoChat from './VideoChat';


const Lobby = ({
  username,
  handleUsernameChange,
  roomName,
  handleRoomNameChange,
  handleSubmit,
  connecting,
}) => {
  const [roomCode, setRoomCode] = useState('');

  const generateRoomCode = () => {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    let result = '';
    for (let i = 0; i < 20; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    setRoomCode(result);
  }

  // Render a form element with input fields for the user's name and the room name
  return (
    <div className="lobby-page">
      <div className="lobby-details">
        <h2>Create or Join a room</h2>
        <form onSubmit={handleSubmit}>
          <div className="lobby-credentials">
            <label htmlFor="name">Display Name:</label>
            <input
              type="text"
              id="field"
              value={username}
              onChange={handleUsernameChange}
              readOnly={connecting}
              required
            />
          </div>

          <div className="lobby-credentials">
            <label htmlFor="room">Enter Room Code:</label>
            <p></p>
            <input
              type="text"
              id="room"
              value={roomName}
              onChange={handleRoomNameChange}
              readOnly={connecting}
              required
            />
          </div>
          <div className="lobby-rec">
            <p>Recommended: Don't have a secure room code? Create one here!</p>
            <div className="lobby-gen-btn">
             <button id='cust-btn' onClick={generateRoomCode}>Generate Room Code</button>
            </div>
            <p>{roomCode}</p>
          </div>

            <button type="submit" disabled={connecting}>
            {connecting ? "Connecting" : "Join"}
          </button>
        </form>


      </div>
    </div>
  );
};

export default Lobby;
