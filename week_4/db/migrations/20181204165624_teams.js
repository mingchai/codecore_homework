
exports.up = function(knex, Promise) {
  return knex.schema.createTable("teams", table=>{
      table.increments("id");
      table.text("name");
      table.string("members");
      table.string("logoUrl");
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("teams");
};
