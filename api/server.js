const express = require("express");

const crossfitRouter = require("../routers/crossfit-router.js");
const absRouter = require("../routers/abs-router.js");
const authRouter = require('../routers/auth-router.js');

const server = express();

server.get("/", (req, res) => {
  res.send(
    "Navigate to /api/register to register, /api/login to log in, \n /api/Crossfitwod to get crossfit workouts, /api/crossfitwod/id/abs \n to get ab workout along with a crossfit workout"
  );
});

server.use("/api/Crossfitwod", crossfitRouter);
server.use("/api/abs", absRouter);
server.use('/api/auth', authRouter);

module.exports = server;
