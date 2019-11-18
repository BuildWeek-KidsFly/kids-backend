const db = require("../dbconfig");

module.exports = {
  getUsers,
  add,
  getUsersBy,
  getUserById,
  getTrips
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

function getTrips(user) {
  const { id } = user.id;
  return db("users")
    .select("*")
    .from("trips");
}

async function add(user) {
  const [id] = await db("users").insert(user, "id");
  return getUserById(id);
}
