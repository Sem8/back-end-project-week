exports.seed = function(knex, Promise) {
  return knex("AbsWod").insert([
    {
      Workout_Structure: "2 Rounds",
      Workout:
        "-50 Hand-to-feet ball pass, -100 Standing side rotations w/ dumbbell, -100 bicycle crunches, -100 dumbbell crossover punch, -50 hanging leg raises",
      crossfit_id: 1
    },
  ]);
};
