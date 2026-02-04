CREATE TABLE Borrow (
    id SERIAL PRIMARY KEY,
    member_id INT NOT NULL REFERENCES Member(id),
    copy_id INT NOT NULL REFERENCES Copy(id),
    borrow_date DATE NOT NULL,
    return_date DATE,
    condition VARCHAR(20) CHECK (condition IN ('Good', 'Damaged', 'Lost')),
    late_fee DECIMAL(3, 2)
);