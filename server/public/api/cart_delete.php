<?php

if(!defined('INTERNAL')){
  exit('cannot allow direct access');
}

$data = getBodyData();
$data = json_decode($data, true);
if(!$id){
  $error = 'must have a cart item id to delete from cart';
  throw new Exception($error);
}
$id = $data['id'];
if ($id <= 0){
  $error = 'invlid cart item id: '.$id;
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

$query = "DELETE FROM `cartItems` WHERE `cartItems`.`id` = $id";

$result = mysqli_query($conn, $query);
if(!$result){
  throw new Exception(mysqli_error($conn));
}
if (mysqli_affected_rows($conn) < 1){
  mysqli_query($conn, 'ROLLBACK');
  throw new Exception('there was an error deleting from cart');
}
mysqli_query($conn, 'COMMIT');

?>
