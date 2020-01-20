<?php

require_once('functions.php');
set_exception_handler('error_handler');
require_once('db_connection.php');

startup();

$whereClause = '';
if (!empty($_GET['id'])) {
  if (!is_numeric($_GET['id'])) {
    throw new Exception('id needs to be a number');
  }
  $whereClause = 'WHERE p.`id` = ' . $_GET['id'];
}

$query = "SELECT p.`id`, p.`name`, p.`price`, p.`shortDescription`, p.`longDescription`, p.`featured`,
	               GROUP_CONCAT(`product_images`.`url`) AS 'images'
	          FROM `products` AS p
            JOIN `product_images` ON p.`id` = `product_images`.`product_id` "
            . $whereClause .
            " GROUP BY p.`id`";

$result = mysqli_query($conn, $query);

if (!$result) {
  throw new Exception(mysqli_error($conn));
}
if (mysqli_num_rows($result) === 0 && !empty($_GET['id'])) {
  throw new Exception('Invalid ID: ' . $_GET['id']);
}

$output = [];
while ($row = mysqli_fetch_assoc($result)) {
  $images = explode(',', $row['images']);
  $row['images'] = $images;
  $row['id'] = (int)$row['id'];
  $row['price'] = (int)$row['price'];
  $row['featured'] = (int)$row['featured'];
  $output[] = $row;
}
$json_output = json_encode($output);
print($json_output);

?>
