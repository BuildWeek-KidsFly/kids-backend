exports.up = function(knex) {
  return knex.schema.createTable("users", users => {
    users.increments();

    users
      .string("email", 128)
      .notNullable()
      .unique();
    users.string("password", 128).notNullable();
    users.string("home_airport", 4);
    users.string("name", 128);
    users.string("address", 128);
    users.string("phone", 20);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("users");
};
