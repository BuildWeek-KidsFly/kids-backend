const router = require("express").Router();
const bcrypt = require("bcryptjs");

const Users = require("../data/users/users-model");

router.get("/", (req, res) => {
  res.status(200).json({ api: "up" });
});

router.post("/register", (req, res) => {
  const user = req.body;
  const hash = bcrypt.hashSync(user.password, 12);
  user.password = hash;

  Users.add(user)
    .then(user => {
      const { id, username } = user;
      res.status(200).json({ id, username });
    })
    .catch();
});

module.exports = router;
