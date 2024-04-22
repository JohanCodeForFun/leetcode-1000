# Write your MySQL query statement below
SELECT requester_id
FROM RequestAccepted
WHERE requester_id = accepter_id

-- WHERE requester_id IN (SELECT accepter_id
--                       FROM RequestAccepted)
-- AND accepter_id IN (SELECT requester_id
--                       FROM RequestAccepted)

