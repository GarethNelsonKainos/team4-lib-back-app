-- Active: 1770205800437@@127.0.0.1@5432@postgres@library_db
CREATE TABLE Borrow (
    id_ SERIAL PRIMARY KEY,
    member_id INT NOT NULL REFERENCES Member(id_),
    copy_id INT NOT NULL REFERENCES Copy(id_),
    borrow_date DATE NOT NULL,
    return_date DATE,
    condition VARCHAR(20) CHECK (condition IN ('Good', 'Damaged', 'Lost')),
    late_fee DECIMAL(3, 2)
);