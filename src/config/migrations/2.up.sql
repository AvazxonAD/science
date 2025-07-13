CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    email VARCHAR,
    password VARCHAR,
    created_at TIMESTAMP,
    updated_at TIMESTAMP,
    isdeleted BOOLEAN DEFAULT false
);