const express = require("express");
const helmet = require("helmet");
const cors = require("cors");

const UsersRouter = require("../data/users/users-router");
const AuthRouter = require("../auth/auth-router");
// const ConnectionsRouter = require('../data/connections/connections-router');

const server = express();

server.use(helmet());
server.use(express.json());
server.use(cors());

server.get("/", (req, res) => {
  res.status(200).json({ api: "up" });
});

server.use("/api/auth", AuthRouter);
server.use("/api/users", UsersRouter);

module.exports = server;
