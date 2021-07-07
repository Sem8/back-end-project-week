
exports.up = function(knex, Promise) {
    return knex.schema.createTable('crossfitwod', crossfitTbl => {
        crossfitTbl.increments();

        crossfitTbl.date('Date');
        crossfitTbl.string('Workout_Name').notNullable();
        crossfitTbl.text('Warmup').notNullable();
        crossfitTbl.text('Workout_Structure').notNullable();
        crossfitTbl.text('Workout').notNullable();
    });
  
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('crossfitwod');  
};
