# Write your MySQL query statement below
WITH UserCounts AS (
    SELECT COUNT(m.user_id) AS counted, u.name
    FROM MovieRating m
    JOIN Users u ON m.user_id = u.user_id
    GROUP BY m.user_id
    ORDER BY counted DESC, u.name ASC
    LIMIT 1
),
TopRatedMovies AS (
    SELECT m.title, ROUND(AVG(r.rating), 1) AS avgRating
    FROM MovieRating r
    JOIN Movies m ON r.movie_id = m.movie_id
    WHERE YEAR(r.created_at) = 2020 AND MONTH(r.created_at) = 2
    GROUP BY m.title
    ORDER BY avgRating DESC, m.title ASC
    LIMIT 1
)
SELECT uc.name AS results FROM UserCounts uc
UNION ALL
SELECT tm.title AS results FROM TopRatedMovies tm;


Input: 
Movies table:
+-------------+--------------+
| movie_id    |  title       |
+-------------+--------------+
| 1           | Avengers     |
| 2           | Frozen 2     |
| 3           | Joker        |
+-------------+--------------+
Users table:
+-------------+--------------+
| user_id     |  name        |
+-------------+--------------+
| 1           | Daniel       |
| 2           | Monica       |
| 3           | Maria        |
| 4           | James        |
+-------------+--------------+
MovieRating table:
+-------------+--------------+--------------+-------------+
| movie_id    | user_id      | rating       | created_at  |
+-------------+--------------+--------------+-------------+
| 1           | 1            | 3            | 2020-01-12  |
| 1           | 2            | 4            | 2020-02-11  |
| 1           | 3            | 2            | 2020-02-12  |
| 1           | 4            | 1            | 2020-01-01  |
| 2           | 1            | 5            | 2020-02-17  | 
| 2           | 2            | 2            | 2020-02-01  | 
| 2           | 3            | 2            | 2020-03-01  |
| 3           | 1            | 3            | 2020-02-22  | 
| 3           | 2            | 4            | 2020-02-25  | 
+-------------+--------------+--------------+-------------+
Output: 
+--------------+
| results      |
+--------------+
| Daniel       |
| Frozen 2     |
+--------------+
Explanation: 
Daniel and Monica have rated 3 movies ("Avengers", "Frozen 2" and "Joker") but Daniel is smaller lexicographically.
Frozen 2 and Joker have a rating average of 3.5 in February but Frozen 2 is smaller lexicographically.