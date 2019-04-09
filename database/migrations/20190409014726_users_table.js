
exports.up = function(knex, Promise) {
    return knex.schema.createTable('users', usersTbl => {
        usersTbl.increments();

        usersTbl.string('username').notNullable().unique();
        usersTbl.string('password').notNullable();
    });  
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('users');  
};
