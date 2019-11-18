const db = require("../dbconfig");

module.exports = {
  getUsers,
  add,
  getUsersBy,
  getUserById,
  getTrips,
  updateTrip
};

function getUsers() {
  return db("users").select("id", "email");
}

function getUsersBy(filter) {
  return db("users").where(filter);
}

function getUserById(id) {
  return db("users")
    .where({ id })
    .first();
}

function getTrips(id) {
  return db("trips")
    .select(
      "trips.id",
      "airport_name",
      "airline",
      "flight_number",
      "departure_time",
      "number_of_items",
      "number_of_children",
      "special"
    )
    .join("users", function() {
      this.on("traveler_id", "=", "users.id");
    })
    .where({ traveler_id: id });
}

function updateTrip(tripId, userId, changes) {
  return db("trips")
    .update(changes)
    .where({ id: tripId, traveler_id: userId });
}

function removeTrip(id, tripId) {
  return db("trips")
    .where({ traveler_id: id, id: tripId })
    .del();
}

async function add(user) {
  const [id] = await db("users").insert(user, "id");
  return getUserById(id);
}
