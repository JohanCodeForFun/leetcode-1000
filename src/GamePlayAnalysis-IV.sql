# Write your MySQL query statement below
WITH first_logins AS (
    SELECT
        a.player_id,
        MIN(a.event_date) AS first_login
    FROM
        Activity a
    GROUP BY
        a.player_id
), consec_logins AS (
    SELECT
        COUNT(a.player_id) AS num_logins
    FROM
        first_logins f
    INNER JOIN Activity a ON f.player_id = a.player_id
    AND f.first_login = DATE_SUB(a.event_date, INTERVAL 1 DAY)
)
SELECT
    ROUND(
        (SELECT c.num_logins FROM consec_logins c)
        / (SELECT COUNT(f.player_id) FROM first_logins f)
        ,2) AS fraction;


  Example 1:
  Input:
  Activity table:
  +-----------+-----------+------------+--------------+
  | player_id | device_id | event_date | games_played |
  +-----------+-----------+------------+--------------+
  | 1         | 2         | 2016-03-01 | 5            |
  | 1         | 2         | 2016-03-02 | 6            |
  | 2         | 3         | 2017-06-25 | 1            |
  | 3         | 1         | 2016-03-02 | 0            |
  | 3         | 4         | 2018-07-03 | 5            |
  +-----------+-----------+------------+--------------+
  Output:
  +-----------+
  | fraction  |
  +-----------+
  | 0.33      |
  +-----------+
  Explanation:
  Only the player with id 1 logged back in after the first day he had logged in so the answer is 1/3 = 0.33