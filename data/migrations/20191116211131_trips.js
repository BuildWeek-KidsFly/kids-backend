exports.up = function(knex) {
  return knex.schema.createTable("trips", trips => {
    trips.increments();

    trips.string("airport_name", 128).notNullable();
    trips.string("airline").notNullable();
    trips.string("flight_number", 255).notNullable();
    trips.string("departure_time", 255).notNullable();
    trips.integer("number_of_items", 2).notNullable();
    trips.integer("number_of_children", 3).notNullable();
    trips.string("special", 255);

    // foreign keys
    trips
      .integer("traveler_id", 255)
      .unsigned()
      .references("id")
      .inTable("users")
      .notNullable();
    trips
      .integer("connection_id", 255)
      .unsigned()
      .references("id")
      .inTable("connections")
      .notNullable();
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("trips");
};
