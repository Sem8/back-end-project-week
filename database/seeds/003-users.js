exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("users").insert([{ username: "semm", password: "limi" }]);
};
