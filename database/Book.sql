CREATE TABLE Book (
    book_id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    isbn VARCHAR(20) UNIQUE NOT NULL,
    genre_id INT REFERENCES Genre(id),
    publication_year INT,
    blurb TEXT
);