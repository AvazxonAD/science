ALTER TABLE
    users drop column isdeleted;

ALTER TABLE
    users
add
    column is_active boolean DEFAULT true;