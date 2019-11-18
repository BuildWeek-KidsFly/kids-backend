const router = require("express").Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const Users = require("./users-model");

router.get("/users", (req, res) => {
  Users.getUsers()
    .then(users => res.status(200).json(users))
    .catch(error =>
      res.status(500).json({ error: "internal error getting users" })
    );
});

module.exports = router;
