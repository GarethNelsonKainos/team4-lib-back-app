CREATE TABLE Copy (
    copy_id SERIAL PRIMARY KEY,
    book_id INT NOT NULL REFERENCES Book(id) ON DELETE CASCADE,
    copy_id VARCHAR(50) UNIQUE NOT NULL,
    copy_status VARCHAR(20) CHECK (status IN ('Available', 'Borrowed')) NOT NULL,
    borrower_id INT REFERENCES Member(id),
    borrow_id INT REFERENCES Borrow(borrow_id)
);