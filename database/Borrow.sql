CREATE TABLE Borrow (
    id_ SERIAL PRIMARY KEY,
    member_id INT NOT NULL REFERENCES Member(id_),
    copy_id INT NOT NULL REFERENCES Copy(id_),
    borrow_date DATE NOT NULL,
    return_date DATE,
    condition VARCHAR(20) CHECK (condition IN ('Good', 'Damaged', 'Lost')),
    late_fee DECIMAL(5, 2)
);