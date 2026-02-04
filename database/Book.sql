-- Active: 1770205800437@@127.0.0.1@5432@postgres@library_db
CREATE TABLE Book (
    book_id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    author VARCHAR(255) NOT NULL,
    isbn VARCHAR(20) UNIQUE NOT NULL,
    genre VARCHAR(100),
    publication_year INT,
    blurb TEXT
);