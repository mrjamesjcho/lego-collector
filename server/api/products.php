<?php

if ($request['method'] === 'GET') {
  $link = get_db_link();

  $whereClause = '';
  if (!empty($request['query']['id'])) {
    $productId = $request['query']['id'];
    if (!is_numeric($productId) || $productId <= 0) {
      throw new ApiError('id must be a non-zero integer', 400);
    }
    $whereClause = 'WHERE p.`id` = ' . $productId;
  }

  $query = "SELECT p.`id`, p.`name`, p.`price`, p.`shortDescription`, p.`longDescription`, p.`featured`,
                  GROUP_CONCAT(`product_images`.`url`) AS 'images'
              FROM `products` AS p
              JOIN `product_images` ON p.`id` = `product_images`.`product_id` "
              . $whereClause .
              " GROUP BY p.`id`";

  $result = mysqli_query($link, $query);
  if (mysqli_num_rows($result) === 0) {
    throw new ApiError('Invalid ID: ' . $productId, 404);
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
