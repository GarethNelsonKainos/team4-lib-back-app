-- Test Data Insertion Script for Library Database
-- Insert order respects FK constraints: Genre → Author → Book → BookAuthor → Member → Copy → Borrow

-- ============================================
-- 1. INSERT GENRES (no dependencies)
-- ============================================
INSERT INTO Genre (genre_id, name) VALUES
    (1, 'Fiction'),
    (2, 'Science Fiction'),
    (3, 'Mystery'),
    (4, 'Biography'),
    (5, 'Self-Help');
-- ============================================
-- 2. INSERT AUTHORS (no dependencies)
-- ============================================

INSERT INTO Author (author_id, name) VALUES
    (1, 'George Orwell'),
    (2, 'J.K. Rowling'),
    (3, 'Isaac Asimov'),
    (4, 'Agatha Christie'),
    (5, 'Malcolm Gladwell');

-- ============================================
-- 3. INSERT BOOKS (no FK to Genre/Author via junction)
-- ============================================
INSERT INTO Book (book_id, title, isbn, genre_id, publication_year, blurb) VALUES
    (1, '1984', '978-0451524935', 1, 1949, 'A dystopian novel about totalitarianism and surveillance.'),
    (2, 'Harry Potter and the Philosopher''s Stone', '978-0747532699', 1, 1997, 'A young wizard discovers his magical heritage.'),
    (3, 'Foundation', '978-0553293357', 2, 1951, 'A mathematician develops psychohistory to predict the future.'),
    (4, 'Murder on the Orient Express', '978-0062693662', 3, 1934, 'Detective Poirot investigates a murder on a luxury train.'),
    (5, 'Outliers', '978-0316017930', 5, 2008, 'Explores what makes high-achievers different.');

-- ============================================
-- 4. INSERT BOOKAUTHOR JUNCTION (FK: Book, Author)
-- ============================================
INSERT INTO BookAuthor (book_id, author_id) VALUES
    (1, 1),  -- 1984 by George Orwell
    (2, 2),  -- Harry Potter by J.K. Rowling
    (3, 3),  -- Foundation by Isaac Asimov
    (4, 4),  -- Murder on the Orient Express by Agatha Christie
    (5, 5);  -- Outliers by Malcolm Gladwell

-- ============================================
-- 5. INSERT MEMBERS (no dependencies)
-- ============================================
INSERT INTO Member (member_id, member_name, phone_num, email_address, address_line1, address_line2, postal_code, membership_status, registration_date) VALUES
    ('M001', 'Alice Johnson', '555-0101', 'alice.j@email.com', '123', 'Main St', 'SW1A 1AA', 'Active', '2024-01-15 10:30:00'),
    ('M002', 'Bob Smith', '555-0102', 'bob.smith@email.com', '456', 'Oak Ave', 'SW1A 2BB', 'Active', '2024-02-20 14:45:00'),
    ('M003', 'Carol White', '555-0103', 'carol.w@email.com', '789', 'Elm Rd', 'SW1A 3CC', 'Active', '2024-03-10 09:15:00'),
    ('M004', 'David Brown', '555-0104', 'david.b@email.com', '321', 'Pine Ln', 'SW1A 4DD', 'Inactive', '2023-11-05 16:20:00');

-- ============================================
-- 6. INSERT COPIES (FK: Book)
-- ============================================
INSERT INTO Copy (copy_pk_id, book_id, copy_id, copy_status) VALUES
    (1, 1, 'C001-001', 'Borrowed'),    -- 1984 Copy 1
    (2, 1, 'C001-002', 'Available'),   -- 1984 Copy 2
    (3, 2, 'C002-001', 'Borrowed'),    -- Harry Potter Copy 1
    (4, 2, 'C002-002', 'Available'),   -- Harry Potter Copy 2
    (5, 3, 'C003-001', 'Available'),   -- Foundation Copy 1
    (6, 4, 'C004-001', 'Borrowed'),    -- Murder on Orient Express Copy 1
    (7, 5, 'C005-001', 'Available');   -- Outliers Copy 1

-- ============================================
-- 7. INSERT BORROWS (FK: Member, Copy)
-- ============================================
INSERT INTO Borrow (member_id, copy_id, borrow_date, return_date, condition, late_fee) VALUES
    -- Active borrows (return_date NULL)
    (1, 1, '2026-01-20', NULL, NULL, NULL),              -- Alice borrowed 1984 Copy 1
    (2, 3, '2026-01-25', NULL, NULL, NULL),              -- Bob borrowed Harry Potter Copy 1
    (3, 6, '2026-01-28', NULL, NULL, NULL),              -- Carol borrowed Murder Copy 1
    (1, 2, '2025-12-01', '2025-12-10', 'Good', 0.00),    -- Alice returned 1984 Copy 2
    (2, 5, '2025-11-15', '2025-11-30', 'Good', 0.00),    -- Bob returned Foundation Copy 1
    (4, 7, '2025-10-01', '2025-10-25', 'Damaged', 5.50); -- David returned Outliers late & damaged

-- ============================================
-- VERIFICATION QUERIES
-- ============================================
-- Uncomment below to verify data after insertion:

-- SELECT 'Books with Authors' AS info;
-- SELECT b.title, a.name AS author, b.isbn, g.name AS genre
-- FROM Book b
-- JOIN BookAuthor ba ON b.book_id = ba.book_id
-- JOIN Author a ON ba.author_id = a.author_id
-- JOIN Genre g ON b.genre_id = g.genre_id;

-- SELECT 'Active Borrows' AS info;
-- SELECT m.member_name, b.title, c.copy_id, br.borrow_date
-- FROM Borrow br
-- JOIN Member m ON br.member_id = m.member_pk_id
-- JOIN Copy c ON br.copy_id = c.copy_pk_id
-- JOIN Book b ON c.book_id = b.book_id
-- WHERE br.return_date IS NULL;

-- SELECT 'Member Borrow Counts' AS info;
-- SELECT m.member_name, COUNT(*) AS active_borrows
-- FROM Borrow br
-- JOIN Member m ON br.member_id = m.member_pk_id
-- WHERE br.return_date IS NULL
-- GROUP BY m.member_name;
