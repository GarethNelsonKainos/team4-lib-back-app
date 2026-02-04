-- Active: 1770205800437@@127.0.0.1@5432@postgres@library_db
CREATE TABLE BookAuthor (
    book_id INT NOT NULL REFERENCES Book(book_id) ON DELETE CASCADE,
    author_id INT NOT NULL REFERENCES Author(id) ON DELETE CASCADE,
    PRIMARY KEY (book_id, author_id)
);