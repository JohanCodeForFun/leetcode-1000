# Write your MySQL query statement below
-- Thank you, Nozomi for this solution.
-- Link, https://leetcode.com/u/user9541NY/

SELECT 
    CASE
        WHEN id = (SELECT MAX(id) FROM Seat) AND id % 2 = 1
            THEN id
        WHEN id % 2 = 1
            THEN id + 1
        ELSE id - 1
    END AS id,
        student
FROM Seat
ORDER BY id;


Input: 
Seat table:
+----+---------+
| id | student |
+----+---------+
| 1  | Abbot   |
| 2  | Doris   |
| 3  | Emerson |
| 4  | Green   |
| 5  | Jeames  |
+----+---------+
Output: 
+----+---------+
| id | student |
+----+---------+
| 1  | Doris   |
| 2  | Abbot   |
| 3  | Green   |
| 4  | Emerson |
| 5  | Jeames  |
+----+---------+
Explanation: 
Note that if the number of students is odd, there is no need to change the last one's seat.