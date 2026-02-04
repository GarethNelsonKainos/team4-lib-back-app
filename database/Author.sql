-- Active: 1770205800437@@127.0.0.1@5432@postgres@library_db
CREATE TABLE Author (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL
);