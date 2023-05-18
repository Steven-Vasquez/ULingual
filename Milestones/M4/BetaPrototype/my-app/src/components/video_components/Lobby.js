import React from "react";
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
  // Render a form element with input fields for the user's name and the room name
  return (
    <div className="lobby-page">
      <div className="lobby-details">
        <h2>Enter your Credentials!</h2>
      <form onSubmit={handleSubmit}>
        <div className="lobby-credentials">
          <label htmlFor="name">Enter Name:</label>
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
          <label htmlFor="room">Enter Room ID:</label>
          <input
            type="text"
            id="room"
            value={roomName}
            onChange={handleRoomNameChange}
            readOnly={connecting}
            required
          />
        </div>

        <button type="submit" disabled={connecting}>
          {connecting ? "Connecting" : "Join"}
        </button>

        {/*
          Steven,  maybe here is where you can
          incorporate the video component u made.
            <main>
              <VideoChat />
            </main>
      */}
      </form>
    </div>
  </div>
  );
};

export default Lobby;
