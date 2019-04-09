const express = require("express");

const server = express();

server.get("/", (req, res) => {
  res.send(
    "Navigate to /api/register to register, /api/login to log in, /api/Crossfitwod to get crossfit workouts, /api/crossfitwod/id/abs to get ab workout along with a crossfit workout"
  );
});

module.exports = server;
