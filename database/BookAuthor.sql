CREATE TABLE BookAuthor (
    book_id INT NOT NULL REFERENCES Book(book_id) ON DELETE CASCADE,
    author_id INT NOT NULL REFERENCES Author(author_id) ON DELETE CASCADE,
    PRIMARY KEY (book_id, author_id)
);