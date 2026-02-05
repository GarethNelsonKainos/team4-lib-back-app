CREATE TABLE Borrow (
    borrow_id SERIAL PRIMARY KEY,
    member_id INT NOT NULL REFERENCES Member(member_pk_id),
    copy_id INT NOT NULL REFERENCES Copy(copy_pk_id),
    borrow_date DATE NOT NULL,
    return_date DATE,
    condition VARCHAR(20) CHECK (condition IN ('Good', 'Damaged', 'Lost')),
    late_fee DECIMAL(5, 2)
);