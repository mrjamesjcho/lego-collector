<?php

print('in cart delete');

if(!defined('INTERNAL')){
  exit('cannot allow direct access');
}

$data = getBodyData();
$data = json_decode($data, true);
if(!$data){
  $error = 'must have a cart item id to update cart';
  throw new Exception($error);
}
$id = $data['id'];
if ($id <= 0){
  $error = 'invlid cart item id: '.$id;
  throw new Exception($error);
}
$incDec = (int)$data['incDec'];

print($data);

if (empty($_SESSION['cartId'])){
  $cartId = false;
} else {
  $cartId = $_SESSION['cartId'];
}

$transactionResult = mysqli_query($conn, 'START TRANSACTION');

if(!$transactionResult){
  throw new Exception(mysqli_error($conn));
}

$query = "UPDATE `cartItems` SET `count` = `count` + $incDec WHERE `cartItems`.`productID` = $id AND `cartItems`.`cartID` = $cartId";

$result = mysqli_query($conn, $query);
if(!$result){
  throw new Exception(mysqli_error($conn));
}
if (mysqli_affected_rows($conn) < 1){
  mysqli_query($conn, 'ROLLBACK');
  throw new Exception('there was an error updating cart');
}
mysqli_query($conn, 'COMMIT');

?>
