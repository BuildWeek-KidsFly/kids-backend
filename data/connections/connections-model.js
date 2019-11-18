const db = require("../dbconfig");

module.exports = {
  getPassengers
};

function getPassengers() {
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
      this.on("connection_id", "=", "connections.id");
    })
    .where({ connection_id: id });
}
