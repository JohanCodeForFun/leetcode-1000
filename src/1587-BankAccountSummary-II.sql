-- # Write your MySQL query statement below
SELECT
  u.name, SUM(t.amount) as balance
FROM
  Users u
JOIN
  Transactions t
ON
  u.account=t.account
GROUP BY
  u.account
HAVING
  balance > 10000;

--
-- Example 1:
-- Input: 
-- Users table:
-- +------------+--------------+
-- | account    | name         |
-- +------------+--------------+
-- | 900001     | Alice        |
-- | 900002     | Bob          |
-- | 900003     | Charlie      |
-- +------------+--------------+
-- Transactions table:
-- +------------+------------+------------+---------------+
-- | trans_id   | account    | amount     | transacted_on |
-- +------------+------------+------------+---------------+
-- | 1          | 900001     | 7000       |  2020-08-01   |
-- | 2          | 900001     | 7000       |  2020-09-01   |
-- | 3          | 900001     | -3000      |  2020-09-02   |
-- | 4          | 900002     | 1000       |  2020-09-12   |
-- | 5          | 900003     | 6000       |  2020-08-07   |
-- | 6          | 900003     | 6000       |  2020-09-07   |
-- | 7          | 900003     | -4000      |  2020-09-11   |
-- +------------+------------+------------+---------------+
-- Output: 
-- +------------+------------+
-- | name       | balance    |
-- +------------+------------+
-- | Alice      | 11000      |
-- +------------+------------+
-- Explanation: 
-- Alice's balance is (7000 + 7000 - 3000) = 11000.
-- Bob's balance is 1000.
-- Charlie's balance is (6000 + 6000 - 4000) = 8000.
