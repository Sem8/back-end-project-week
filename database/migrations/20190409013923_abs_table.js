exports.up = function(knex, Promise) {
  return knex.schema.createTable("AbsWod", absWodtbl => {
    absWodtbl.increments();

    absWodtbl.text("Workout Structure").notNullable();
    absWodtbl.text("Workout").notNullable();
    absWodtbl
      .integer("crossfit_id")
      .unsigned()
      .notNullable()
      .references("id")
      .inTable("crossfitwod").onDelete('CASCADE').onUpdate('CASCADE');
  });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('AbsWod');
};
