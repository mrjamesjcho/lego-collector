<?php

if ($request['method'] === 'GET') {
  $link = get_db_link();


$whereClause = '';
if (!empty($_GET['id'])) {
  if (!is_numeric($_GET['id'])) {
    throw new ApiError('id needs to be a number');
  }
  $whereClause = 'WHERE p.`id` = ' . $_GET['id'];
}

$query = "SELECT p.`id`, p.`name`, p.`price`, p.`shortDescription`, p.`longDescription`, p.`featured`,
	               GROUP_CONCAT(`product_images`.`url`) AS 'images'
	          FROM `products` AS p
            JOIN `product_images` ON p.`id` = `product_images`.`product_id` "
            . $whereClause .
            " GROUP BY p.`id`";

$result = mysqli_query($link, $query);

if (!$result) {
  throw new ApiError(mysqli_error($link));
}
if (mysqli_num_rows($result) === 0 && !empty($_GET['id'])) {
  throw new ApiError('Invalid ID: ' . $_GET['id']);
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
$response['body'] = $output;
send($response);

}

?>
