CREATE TABLE articles (
id INT AUTO_INCREMENT PRIMARY KEY, -- Unique article identifier
title VARCHAR(255) NOT NULL, -- Article title
content TEXT, -- Article text
author VARCHAR(255) NOT NULL, -- Article author
created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP, -- Date and time of creation
updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP -- Date and time of last update
);
INSERT INTO articles (title, content, author)
VALUES
('Template article 1', 'Text of article 1', 'Author 1'),
('Template article 2', 'Text of article 2', 'Author 2'),
('Template article 3', 'Text of article 3', 'Author 3'),
('Template article 4', 'Text of article 4', 'Author 4'),
('Template article 5', 'Text of article 5', 'Author 5'),
('Template article 6', 'Text of article 6', 'Author 6'),
('Template article 7', 'Text of article 7', 'Author 7'),
('Template article 8', 'Text of article 8', 'Author 8'),
('Template article 9', 'Text of article 9', 'Author 9'),
('Template article 10', 'Text of article 10', 'Author 10');

INSERT INTO articles (title, content, author)
VALUES ('Article Title', 'Article Text', 'Author Name');

SELECT * FROM articles;
SELECT * FROM articles WHERE id = 1;
DELETE FROM articles WHERE id = 1;
SELECT * FROM articles WHERE author = 'Ben';
SELECT * FROM articles WHERE created_at > '2024-01-01 00:00:00';
SELECT * FROM articles ORDER BY created_at DESC;
SELECT COUNT(*) FROM articles;
SELECT * FROM articles WHERE title LIKE '%kuku%';
SELECT DISTINCT author FROM articles;