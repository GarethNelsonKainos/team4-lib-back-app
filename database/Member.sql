CREATE TABLE Member (
    id SERIAL PRIMARY KEY,
    member_id VARCHAR(50) UNIQUE NOT NULL,
    name VARCHAR(255) NOT NULL,
    contact_information TEXT,
    address TEXT,
    membership_status VARCHAR(50),
    registration_date DATE
);