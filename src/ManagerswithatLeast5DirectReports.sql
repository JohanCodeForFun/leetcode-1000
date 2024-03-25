# Write your MySQL query statement below
SELECT a.name
FROM Employee a
LEFT JOIN Employee b
on a.id = b.managerId
GROUP BY b.managerId
HAVING COUNT(b.managerId) >= 5


Write a solution to find managers with at least five direct reports.
Return the result table in any order.
The result format is in the following example.

Example 1:

Input:
Employee table:
+-----+-------+------------+-----------+
| id  | name  | department | managerId |
+-----+-------+------------+-----------+
| 101 | John  | A          | null      |
| 102 | Dan   | A          | 101       |
| 103 | James | A          | 101       |
| 104 | Amy   | A          | 101       |
| 105 | Anne  | A          | 101       |
| 106 | Ron   | B          | 101       |
+-----+-------+------------+-----------+
Output:
+------+
| name |
+------+
| John |
+------+