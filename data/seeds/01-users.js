const bcrypt = require("bcryptjs");

exports.seed = function(knex) {
  return knex("users").insert([
    {
      email: "email@email.com",
      password: bcrypt.hashSync("password123", 12),
      home_airport: "LAX",
      name: "email boi",
      address: "123 email street",
      phone: "605–475–6968"
    },
    {
      email: "rapper@viper.com",
      password: bcrypt.hashSync("viper", 12),
      home_airport: "SAT",
      name: "viper rapper",
      address: "100 viper lane",
      phone: "573–475–6964"
    },
    {
      email: "youngkingdave@doink.com",
      password: bcrypt.hashSync("bigoledoinks", 12),
      home_airport: "IND",
      name: "king dave",
      address: "926 big ole doink drive",
      phone: "404–760–9338"
    }
  ]);
};
