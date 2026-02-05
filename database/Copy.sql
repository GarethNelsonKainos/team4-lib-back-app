CREATE TABLE Copy (
    copy_pk_id SERIAL PRIMARY KEY,
    book_id INT NOT NULL REFERENCES Book(book_id) ON DELETE CASCADE,
    copy_id VARCHAR(50) UNIQUE NOT NULL,
    copy_status VARCHAR(20) CHECK (copy_status IN ('Available', 'Borrowed')) NOT NULL
);