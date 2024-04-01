# Write your MySQL query statement below
SELECT c.customer_id
FROM Customer c
LEFT JOIN Product p
ON c.product_key = p.product_key
