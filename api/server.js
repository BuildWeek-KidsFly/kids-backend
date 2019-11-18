const express = require("express");
const helmet = require("helmet");
const cors = require("cors");

const UsersRouter = require("../data/users/users-router");

const server = express();

server.use(helmet());
server.use(express.json());
server.use(cors());

server.get("/", (req, res) => {
  res.status(200).json({ api: "up" });
});

server.use("/api/auth/", UsersRouter);

module.exports = server;
