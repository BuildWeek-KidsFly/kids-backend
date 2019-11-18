const router = require("express").Router();
const bcrypt = require("bcryptjs");

const Users = require("../data/users/users-model");
const getJwtToken = require("./auth-helpers");

router.get("/", (req, res) => {
  res.status(200).json({ api: "up" });
});

router.post("/register", (req, res) => {
  const user = req.body;
  const hash = bcrypt.hashSync(user.password, 12);
  user.password = hash;

  Users.add(user)
    .then(user => {
      const { id, email, home_airport } = user;
      res.status(200).json({ id, email, home_airport });
    })
    .catch(error =>
      res.status(500).json({ error: "internal error registering user" })
    );
});

router.post("/login", (req, res) => {
  const { email, password } = req.body;

  Users.getUsersBy({ email })
    .first()
    .then(user => {
      if (user && bcrypt.compareSync(password, user.password)) {
        const token = getJwtToken(user.id);
        res.status(200).json({
          message: "Login successful, have a token",
          payload: token
        });
      } else {
        res.status(401).json({ message: "invalid credentials" });
      }
    })
    .catch(error => res.status(500).json({ error: "internal server error" }));
});

module.exports = router;
