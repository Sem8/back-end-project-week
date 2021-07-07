exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("crossfitwod").insert([
    {
      Date: "April, 10, 2017",
      Workout_Name: "Annie",
      Warmup: "50 dummbbell calf raises",
      Workout_Structure: "25 minute AMRAP",
      Workout:
        "-5 Hang Power Cleans, -10 Renegade Rows, -15 Wall balls, -20 Goblet squats"
    },
  ]);
};
