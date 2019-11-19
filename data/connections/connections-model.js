const db = require("../dbconfig");

module.exports = {
  addConnection,
  getConnectionById,
  getConnectionsBy,
  getPassengers,
  getAllConnections
};

async function addConnection(connection) {
  const [id] = await db("connections").insert(connection, "id");
  return getUserById(id);
}

function getConnectionById(id) {
  return db("connections")
    .where({ id })
    .first();
}

function getConnectionsBy(filter) {
  return db("connections").where(filter);
}

function getPassengers(id) {
  return db("trips")
    .select(
      "trips.id",
      "airport_name",
      "airline",
      "flight_number",
      "departure_time",
      "number_of_items",
      "number_of_children",
      "special",
      "completed"
    )
    .join("connections", function() {
      this.on("connection_id", "=", "connections.id");
    })
    .where({ connection_id: id });
}

function getAllConnections() {
  return db("connections").select("id", "email", "home_airport");
}
