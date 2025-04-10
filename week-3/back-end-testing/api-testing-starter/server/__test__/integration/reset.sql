TRUNCATE goats RESTART IDENTITY; -- Truncate removes all rows from a table, but the table structure and its columns, constraints, indexes, and so on, remain.

INSERT INTO goats (name, age)
VALUES
    ('goat 1',1),
    ('goat 2',2),
    ('goat 3',3);