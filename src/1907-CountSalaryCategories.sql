# Write your MySQL query statement below
SELECT "Low Salary" AS category,
        sum(income < 20000) AS accounts_count
    FROM Accounts

UNION

SELECT "Average Salary" AS category,
        sum(income BETWEEN 20000 AND 50000) AS accounts_count
    FROM Accounts

UNION

SELECT "High Salary" AS category,
        sum(income > 50000) AS accounts_category
    FROM Accounts;

Input:
Accounts table:
+------------+--------+
| account_id | income |
+------------+--------+
| 3          | 108939 |
| 2          | 12747  |
| 8          | 87709  |
| 6          | 91796  |
+------------+--------+
Output:
+----------------+----------------+
| category       | accounts_count |
+----------------+----------------+
| Low Salary     | 1              |
| Average Salary | 0              |
| High Salary    | 3              |
+----------------+----------------+
Explanation:
Low Salary: Account 2.
Average Salary: No accounts.
High Salary: Accounts 3, 6, and 8.