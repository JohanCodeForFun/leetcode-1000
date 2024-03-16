# Write your MySQL query statement below
SELECT Users.user_id,
CONCAT(UPPER(SUBSTR(Users.name, 1,1)), LOWER(SUBSTR(Users.name,2))) AS name
FROM Users
ORDER BY Users.user_id ASC;

Input:
Example 1:
Users table:
+---------+-------+
| user_id | name  |
+---------+-------+
| 1       | aLice |
| 2       | bOB   |
+---------+-------+
Output:
+---------+-------+
| user_id | name  |
+---------+-------+
| 1       | Alice |
| 2       | Bob   |
+---------+-------+