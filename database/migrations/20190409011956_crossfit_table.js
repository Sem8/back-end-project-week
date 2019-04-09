
exports.up = function(knex, Promise) {
    return knex.schema.createTable('crossfitwod', crossfitTbl => {
        crossfitTbl.increments();

        crossfitTbl.date('Date');
        crossfitTbl.string('Workout Name').notNullable();
        crossfitTbl.text('Warmup').notNullable();
        crossfitTbl.text('Workout Structure').notNullable();
        crossfitTbl.text('Workout').notNullable();
    });
  
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('crossfitwod');  
};
