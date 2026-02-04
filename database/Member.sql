CREATE TABLE Member (
    id_ SERIAL PRIMARY KEY,
    member_id VARCHAR(50) UNIQUE NOT NULL,
    member_name VARCHAR(255) NOT NULL,
    phone_num VARCHAR(20),
    email_address VARCHAR(255),
    address_line1 VARCHAR(4),
    address_line2 VARCHAR(255),
    postal_code VARCHAR(10),
    membership_status VARCHAR(50),
    registration_date TIMESTAMP null
);