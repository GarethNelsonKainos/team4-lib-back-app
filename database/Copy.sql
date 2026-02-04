CREATE TABLE Copy (
    id SERIAL PRIMARY KEY,
    book_id INT NOT NULL REFERENCES Book(id) ON DELETE CASCADE,
    copy_id VARCHAR(50) UNIQUE NOT NULL,
    status VARCHAR(20) CHECK (status IN ('Available', 'Borrowed')) NOT NULL,
    borrower_id INT REFERENCES Member(id),
    current_borrow_date DATE
);