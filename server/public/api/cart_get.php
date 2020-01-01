<?php

if(!defined('INTERNAL')){
  exit('cannot allow direct access');
}

if(empty($_SESSION['cartId'])){
  print(json_encode([]));
  exit('cart is empty');
}

$cartId = (int)$_SESSION['cartId'];

$query = 'SELECT c.productID AS id, c.count, c.price, p.shortDescription, p.name, c.id AS cart_item_id,
                 (SELECT i.url FROM product_images AS i WHERE c.productID = i.product_id LIMIT 1) AS "images"
            FROM cartItems AS c
            JOIN products AS p ON c.productID = p.id
            WHERE c.cartID='.$cartId;

$result = mysqli_query($conn, $query);

if(!$result) {
  throw new Exception(mysqli_error($conn));
}
$output = [];
while($row = mysqli_fetch_assoc($result)){
  $row['id'] = (int)$row['id'];
  $row['count'] = (int)$row['count'];
  $row['price'] = (int)$row['price'];
  $output[] = $row;
}
$json_output = json_encode($output);
print($json_output);

?>
