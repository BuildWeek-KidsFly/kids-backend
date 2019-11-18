const router = require("express").Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { authMiddleware } = require("../../auth/authenticate-middleware");

const Users = require("./users-model");

router.get("/", authMiddleware, (req, res) => {
  Users.getUsers()
    .then(users => res.status(200).json(users))
    .catch(error =>
      res.status(500).json({ error: "internal error getting users" })
    );
});

router.get("/:id/trips", authMiddleware, (req, res) => {
  const { id } = req.params;
  Users.getTrips(id)
    .then(trip => res.status(200).json(trip))
    .catch(error => res.status(500).json({ error: "internal server error" }));
});

router.put("/:id/trips/:tripId", authMiddleware, (req, res) => {
  const { id, tripId } = req.params;
  const changes = req.body;
  Users.updateTrip(tripId, id, changes)
    .then(updated => {
      res.status(201).json({
        message: "Trip successfully updated",
        updated: !!Number(updated)
      });
    })
    .catch(error => res.status(500).json({ error: "internal server error" }));
});

router.post("/:id/trips", authMiddleware, (req, res) => {
  const { id } = req.params;
  const trip = req.body;
  console.log("REQ BODY", trip);
  Users.addTrip(id, trip)
    .then(trip => {
      res.status(201).json({ message: "trip created" });
    })
    .catch(error => res.status(500).json({ error: "internal server error" }));
});

router.delete("/:id/trips/:tripId", authMiddleware, (req, res) => {
  const { id, tripId } = req.params;
  Users.removeTrip(id, tripId)
    .then(deleted => res.status(200).json({ message: "trip deleted" }))
    .catch(error => res.status(500).json({ error: "internal server error" }));
});

module.exports = router;
