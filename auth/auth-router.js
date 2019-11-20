const router = require("express").Router();
const bcrypt = require("bcryptjs");

const Users = require("../data/users/users-model");
const Connections = require("../data/connections/connections-model");

// helpers and middleware
const { getJwtToken } = require("./auth-helpers");
const {
  verifyRegister,
  checkLoginCreds
} = require("./authenticate-middleware");
const checkExisting = require("./check-existing");

// endpoints
router.get("/", (req, res) => {
  res.status(200).json({ api: "up" });
});

router.post("/register", checkExisting, verifyRegister, (req, res) => {
  const user = req.body;
  const hash = bcrypt.hashSync(user.password, 12);
  user.password = hash;

  Users.add(user)
    .then(user => {
      const { id, email } = user;
      res.status(200).json({ id, email });
    })
    .catch(error =>
      res.status(500).json({ error: "internal error registering user" })
    );
});

router.post("/login", checkLoginCreds, (req, res) => {
  const { email, password } = req.body;

  Users.getUsersBy({ email })
    .first()
    .then(user => {
      if (user && bcrypt.compareSync(password, user.password)) {
        const token = getJwtToken(user.id);
        res.status(200).json({
          message: "Login successful, have a token",
          id: user.id,
          token
        });
      } else {
        res.status(401).json({ message: "invalid credentials" });
      }
    })
    .catch(error => res.status(500).json({ error: "internal server error" }));
});

router.post("/connections/register", verifyRegister, (req, res) => {
  const connection = req.body;
  const hash = bcrypt.hashSync(connection.password, 12);
  connection.password = hash;
  console.log("REQ BODY", connection);
  return Connections.addConnection(connection)
    .then(connection => {
      const { id, email, home_airport } = connection;
      res.status(200).json({ id, email, home_airport });
    })
    .catch(error => res.status(500).json({ error: "internal server error" }));
});

router.post("/connections/login", checkLoginCreds, (req, res) => {
  const { email, password } = req.body;

  Connections.getConnectionsBy({ email })
    .first()
    .then(connection => {
      if (connection && bcrypt.compareSync(password, connection.password)) {
        const token = getJwtToken(connection.id);
        res.status(200).json({
          message: "Login successful, have a token",
          id: connection.id,
          token
        });
      } else {
        res.status(401).json({ message: "invalid credentials" });
      }
    })
    .catch(error => res.status(500).json({ error: "internal server error" }));
});

module.exports = router;
