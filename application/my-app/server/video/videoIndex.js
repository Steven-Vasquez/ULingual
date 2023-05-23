// File to contain all video-related API calls
const express = require('express');
const bodyParser = require('body-parser');
const config = require('./config');
const { videoToken } = require('./tokens');

// Create a new instance of the Express application
const app = express();

// Use body-parser middleware to parse incoming request bodies
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Function to send the Twilio Access Token as a JSON response
const sendTokenResponse = (token, res) => {
  res.set('Content-Type', 'application/json');
  res.send(
    JSON.stringify({
      token: token.toJwt()
    })
  );
};

// API route for generating a Twilio Access Token for a GET request
app.get('/video/token', (req, res) => {
  // Get the identity and room parameters from the query string of the request
  const identity = req.query.identity;
  const room = req.query.room;

  // Generate a new Twilio Access Token with the videoToken function
  const token = videoToken(identity, room, config);

  // Send the token as a JSON response
  sendTokenResponse(token, res);
});


// API route for generating a Twilio Access Token for a POST request
app.post('/video/token', (req, res) => {
  // Get the identity and room parameters from the request body
  const identity = req.body.identity;
  const room = req.body.room;

  // Generate a new Twilio Access Token with the videoToken function
  const token = videoToken(identity, room, config);

  // Send the token as a JSON response
  sendTokenResponse(token, res);
});

module.exports = app;