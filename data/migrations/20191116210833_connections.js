exports.up = function(knex) {
  return knex.schema.createTable("connections", connections => {
    connections.increments();

    connections
      .string("email", 128)
      .notNullable()
      .unique();
    connections.string("password", 128).notNullable();
    connections.string("home_airport", 4);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("connections");
};
