<?php

if(!defined('INTERNAL')){
  exit('cannot allow direct access');
}

$id = getBodyData();
$id = json_decode($id, true);
if(!$id){
  $error = 'must have a product id to add to cart';
  throw new Exception($error);
}
$id = $id["id"];
if ($id <= 0){
  $error = 'product id must be valid: '.$id;
  throw new Exception($error);
}

if (empty($_SESSION['cartId'])){
  $cartId = false;
} else {
  $cartId = $_SESSION['cartId'];
}

$query = "SELECT `price` FROM `products` WHERE `id` = $id";

$result = mysqli_query($conn, $query);

if(!$result){
  throw new Exception(mysqli_error($conn));
}
if (mysqli_num_rows($result) === 0){
  $error = 'invalid product id: '.$id;
  throw new Exception($error);
}
$productData = mysqli_fetch_assoc($result);

$transactionResult = mysqli_query($conn, 'START TRANSACTION');

if(!$transactionResult){
  throw new Exception(mysqli_error($conn));
}

if(!$cartId){
  $insertQuery = 'INSERT INTO `cart` SET `created`=NOW()';
  $insertResult = mysqli_query($conn, $insertQuery);
  if(!$insertResult){
    throw new Exception(mysqli_error($conn));
  }
  if (mysqli_affected_rows($conn) !== 1){
    throw new Exception('there was an error adding to cart');
  }
  $cartId = mysqli_insert_id($conn);
  $_SESSION['cartId'] = $cartId;
}

$insertQuery = "INSERT INTO `cartItems` SET `price`=".$productData['price'].", `count`=1, `productID`=$id, `cartID`=$cartId, `added`=NOW() ON DUPLICATE KEY UPDATE `count`=`count` + 1";

$insertResult = mysqli_query($conn, $insertQuery);
if(!$insertResult){
  throw new Exception(mysqli_error($conn));
}
if (mysqli_affected_rows($conn) < 1){
  mysqli_query($conn, 'ROLLBACK');
  throw new Exception('there was an error adding to cart');
}
mysqli_query($conn, 'COMMIT');

?>
