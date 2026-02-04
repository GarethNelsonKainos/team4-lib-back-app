-- Active: 1770205800437@@127.0.0.1@5432@postgres@library_db
CREATE TABLE Copy (
    id_ SERIAL PRIMARY KEY,
    book_id INT NOT NULL REFERENCES Book(book_id) ON DELETE CASCADE,
    copy_id VARCHAR(50) UNIQUE NOT NULL,
    copy_status VARCHAR(20) CHECK (copy_status IN ('Available', 'Borrowed')) NOT NULL
);