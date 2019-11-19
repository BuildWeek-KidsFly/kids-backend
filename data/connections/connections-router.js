const router = require("express").Router();

const {
  getPassengers,
  getAllConnections,
  getConnectionsBy,
  getConnectionById,
  addConnection
} = require("./connections-model");

router.get("/", (req, res) => {
  return getAllConnections()
    .then(connections => res.status(200).json(connections))
    .catch(error => res.status(500).json({ message: "internal server error" }));
});

router.get("/:id", (req, res) => {
  const { id } = req.params;
  return getPassengers(id)
    .then(passengers => res.status(200).json(passengers))
    .catch(error => res.status(500).json({ error: "internal server error" }));
});

module.exports = router;
