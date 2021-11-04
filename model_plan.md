## Tables

- recipe
  - *PK* recipe_id (auto) 
  - recipe_name (required, unique)

- step
  - *PK* step_id (auto)
  - *FK* recipe_id (required)
  - step_instruction (required)
  - step_number (required)

- ingredient
  - *PK* ingredient_id (auto)
  - ingredient_name (required, unique)
  - unit_of_measurement (required)

- step_ingredient
  - *PK* step_ingredient_id
  - *FK* ingredient_id
  - ingredient_quantity