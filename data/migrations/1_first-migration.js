const up = async (knex) => {
  return await knex.schema
    .createTable("recipe", table => {
      table.increments("recipe_id");
      table.string("recipe_name", 128)
        .notNullable()
        .unique();
    })
    .createTable("step", table => {
      table.increments("step_id");
      table.string("step_instruction", 128)
        .notNullable();
      table.integer("step_number")
        .unsigned()
        .notNullable();
      table.integer("recipe_id")
        .unsigned()
        .notNullable()
        .references("recipe_id")
        .inTable("recipe")
        .onDelete("CASCADE")
        .onUpdate("CASCADE");
    })
    .createTable("ingredient", table => {
      table.increments("ingredient_id");
      table.string("ingredient_name", 128)
        .notNullable()
        .unique();
      table.string("unit_of_measurement")
        .notNullable();
    })
    .createTable("step_ingredient", table => {
      table.increments("step_ingredient_id");
      table.integer("ingredient_quantity")
        .unsigned()
        .notNullable();
      table.integer("step_id")
        .unsigned()
        .notNullable()
        .references("step_id")
        .inTable("step")
        .onDelete('CASCADE')
        .onUpdate('CASCADE');
      table.integer("ingredient_id")
        .unsigned()
        .notNullable()
        .references("ingredient_id")
        .inTable("ingredient")
        .onDelete('CASCADE')
        .onUpdate('CASCADE');
    });
};

const down = async (knex) => {
  return await knex.schema
    .dropTableIfExists("step_ingredient")
    .dropTableIfExists("ingredient")
    .dropTableIfExists("step")
    .dropTableIfExists("recipe");
};

export {
  up,
  down
};