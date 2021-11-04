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
        ON s.recipe_id = s.recipe_id
        LEFT JOIN [step_ingredient] as si
        ON si.step_id = s.step_id
        LEFT JOIN [ingredient] as i
        ON i.ingredient_id = si.ingredient_id;