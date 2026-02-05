CREATE TABLE Genre (
    genre_id SERIAL PRIMARY KEY,
    name VARCHAR(100) UNIQUE NOT NULL
);

CREATE TABLE Author (
    author_id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL
);

CREATE TABLE Book (
    book_id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    isbn VARCHAR(20) UNIQUE NOT NULL,
    genre_id INT REFERENCES Genre(genre_id),
    publication_year INT,
    blurb TEXT
);

CREATE TABLE Member (
    member_pk_id SERIAL PRIMARY KEY,
    member_id VARCHAR(50) UNIQUE NOT NULL,
    member_name VARCHAR(255) NOT NULL,
    phone_num VARCHAR(20),
    email_address VARCHAR(255),
    address_line1 VARCHAR(255),
    address_line2 VARCHAR(255),
    postal_code VARCHAR(10),
    membership_status VARCHAR(50),
    registration_date TIMESTAMP null
);

CREATE TABLE Copy (
    copy_pk_id SERIAL PRIMARY KEY,
    book_id INT NOT NULL REFERENCES Book(book_id) ON DELETE CASCADE,
    copy_id VARCHAR(50) UNIQUE NOT NULL,
    copy_status VARCHAR(20) CHECK (copy_status IN ('Available', 'Borrowed')) NOT NULL
);

CREATE TABLE BookAuthor (
    book_id INT NOT NULL REFERENCES Book(book_id) ON DELETE CASCADE,
    author_id INT NOT NULL REFERENCES Author(author_id) ON DELETE CASCADE,
    PRIMARY KEY (book_id, author_id)
);

CREATE TABLE Borrow (
    borrow_id SERIAL PRIMARY KEY,
    member_id INT NOT NULL REFERENCES Member(member_pk_id),
    copy_id INT NOT NULL REFERENCES Copy(copy_pk_id),
    borrow_date DATE NOT NULL,
    return_date DATE,
    condition VARCHAR(20) CHECK (condition IN ('Good', 'Damaged', 'Lost')),
    late_fee DECIMAL(5, 2)
);