CREATE TABLE Borrow (
    id SERIAL PRIMARY KEY,
    member_id INT NOT NULL REFERENCES Member(id),
    copy_id INT NOT NULL REFERENCES Copy(id),
    borrow_date DATE NOT NULL,
    due_date DATE NOT NULL,
    return_date DATE,
    condition TEXT,
    late_fee DECIMAL(10,2)
);