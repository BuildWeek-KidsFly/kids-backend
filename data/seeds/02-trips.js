exports.seed = function(knex) {
  return knex("table_name").insert([
    {
      airport_name: "Los Angeles Airport",
      airline: "American Airlines",
      flight_number: "7658",
      departure_time: "8:50pm",
      number_of_items: 5,
      number_of_children: 14,
      special: "I want you to be dressed only in Gucci when I arrive",
      traveler_id: 2,
      contractor_id: 3,
      completed: false
    },
    {
      airport_name: "Indianapolis International Airport",
      airline: "Southwest Airlines",
      flight_number: "8952",
      departure_time: "10:30am",
      number_of_items: 7,
      number_of_children: 3,
      special: "bring me a signed viper CD",
      traveler_id: 1,
      contractor_id: 2,
      completed: false
    },
    {
      airport_name: "Houston Airport",
      airline: "Southwest Airlines",
      flight_number: "4578",
      departure_time: "12:15pm",
      number_of_items: 2,
      number_of_children: 0,
      special: "have 3 big ol doinks ready for me",
      traveler_id: 3,
      contractor_id: 1,
      completed: false
    },
    {
      airport_name: "San Antonio Airport",
      airline: "Southwest Airlines",
      flight_number: "3326",
      departure_time: "12:15pm",
      number_of_items: 2,
      number_of_children: 0,
      special: "have 12 big ol doinks ready for me",
      traveler_id: 3,
      contractor_id: 1,
      completed: false
    }
  ]);
};
