const router = require("express").Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const Users = require("./users-model");

router.get("/", (req, res) => {
  Users.getUsers()
    .then(users => res.status(200).json(users))
    .catch(error =>
      res.status(500).json({ error: "internal error getting users" })
    );
});

router.get("/trips/:id", (req, res) => {
  Users.getTrips(id)
    .then(trip => res.status(200).json(trip))
    .catch(error => res.status(500).json({ error: "internal server error" }));
});

module.exports = router;
