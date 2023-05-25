import React, { useCallback, useEffect, useState } from "react";
import Participant from "./Participant";
import Video from "twilio-video";
import "./stylesheets/Room.css";

const Room = ({ roomName, room, handleLogout, }) => {
  const [participants, setParticipants] = useState([]);
  const [isVideoOn, setIsVideoOn] = useState(true);
  const [isMuted, setIsMuted] = useState(false);

  useEffect(() => {
    // When a participant connects, the participantConnected function is called and the participant is added to the participants array.
    const participantConnected = (participant) => {
      setParticipants((prevParticipants) => [...prevParticipants, participant]);
    };

    // When a participant disconnects, the participantDisconnected function is called and the participant is removed from the participants array.
    const participantDisconnected = (participant) => {
      setParticipants((prevParticipants) =>
        prevParticipants.filter((p) => p !== participant)
      );
    };

    // Event listeners for when a participant connects or disconnects
    room.on("participantConnected", participantConnected);
    room.on("participantDisconnected", participantDisconnected);

    // Add all the participants that are already connected to the room to the participants array
    room.participants.forEach(participantConnected);

    // Unregister event listeners when the component unmounts
    return () => {
      room.off("participantConnected", participantConnected);
      room.off("participantDisconnected", participantDisconnected);
    };
  }, [room]);

  // Map each participant to a Participant component
  const remoteParticipants = participants.map((participant) => (
    <Participant key={participant.sid} participant={participant} />
  ));

  // Creates new video track for when the local participant re-enables their camera
  function createLocalVideoTrack() {
    return navigator.mediaDevices.getUserMedia({ video: true })
      .then((mediaStream) => {
        return new Video.LocalVideoTrack(mediaStream.getVideoTracks()[0]);
      })
      .catch((error) => {
        console.error('Error creating local video track:', error);
        return null;
      });
  }

  // Creates new audio track for when the local participant re-enables their microphone
  function createLocalAudioTrack() {
    return navigator.mediaDevices.getUserMedia({ audio: true })
      .then((mediaStream) => {
        return new Video.LocalAudioTrack(mediaStream.getAudioTracks()[0]);
      })
      .catch((error) => {
        console.error('Error creating local audio track:', error);
        return null;
      });
  }

  // Toggles the local participant's camera on and off
  const toggleCamera = useCallback(async () => {
    if (room) {
      console.log("isVideoOn: " + isVideoOn);
      if (isVideoOn) { // If the camera is already on, turn it off
        const localVideoTrack = room.localParticipant.videoTracks.values().next().value.track;
        if (localVideoTrack.isEnabled) {
          room.localParticipant.unpublishTrack(localVideoTrack);
          localVideoTrack.disable();
          setIsVideoOn(false);
        }
      } else { // If the camera is off, turn it on by publishing the new video track
        const newLocalVideoTrack = await createLocalVideoTrack();
        if (newLocalVideoTrack) {
          room.localParticipant.publishTrack(newLocalVideoTrack);
          setIsVideoOn(true);

          const localVideoElement = document.getElementById('local-video');
          if (localVideoElement) {
            const newMediaStream = new MediaStream([newLocalVideoTrack.mediaStreamTrack]);
            localVideoElement.srcObject = newMediaStream;
            localVideoElement.poster = null; // Set the poster property to null
          }
        }
      }
    }
  }, [room, isVideoOn]);

  // Toggles the local participant's microphone on and off
  const toggleMute = useCallback(async () => {
    if (room) {
      if (!isMuted) { // If the microphone is already muted, unmute it
        const localAudioTrack = room.localParticipant.audioTracks.values().next().value.track;
        if (localAudioTrack.isEnabled) {
          console.log("audio track was enabled");
          room.localParticipant.unpublishTrack(localAudioTrack);
          localAudioTrack.disable();
          setIsMuted(true);
        }
      } else { // If the microphone is not muted, mute it by publishing the new audio track
        console.log("audio track was not enabled");
        const newLocalAudioTrack = await createLocalAudioTrack();
        if (newLocalAudioTrack) {
          room.localParticipant.publishTrack(newLocalAudioTrack);
          setIsMuted(false);
        }
      }
    }
  }, [room, isMuted]);

  // Renders the video room
  return (
    <div className="room">
      <h2>Room: {roomName}</h2>
      <div className="participants">
        <div className="local-participant">
          {room ? (
            <Participant
              key={room.localParticipant.sid}
              participant={room.localParticipant}
              localParticipantIdentity={room.localParticipant.identity}
            />
          ) : (
            ""
          )}
        </div>
        <div className="remote-participants">{remoteParticipants}</div>
      </div>
      <div className="button-box">
        <button className="video-button" onClick={handleLogout}>Leave Call</button>
        <button className="video-button" onClick={toggleCamera}> {isVideoOn ? "Turn Video Off" : "Turn Video On"}</button>
        <button className="video-button" onClick={toggleMute}> {!isMuted ? "Mute" : "Unmute"}</button>
      </div>
    </div>
  );
};

export default Room;
