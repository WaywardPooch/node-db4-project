-- the mongo query
 SELECT r.recipe_id,
        r.recipe_name,
        s.step_id, 
        s.step_number, 
        s.step_instruction, 
        si.ingredient_id,
        i.ingredient_name,
        si.ingredient_quantity,
        i.unit_of_measurement
   FROM [recipe] AS r
        LEFT JOIN [step] as s
        ON r.recipe_id = s.recipe_id
        LEFT JOIN [step_ingredient] as si
        ON s.step_id = si.step_id
        LEFT JOIN [ingredient] as i
        ON si.ingredient_id = i.ingredient_id
  ORDER BY s.step_number ASC;