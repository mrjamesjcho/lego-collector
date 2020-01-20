<?php

require_once('functions.php');
require_once('db_connection.php');

set_exception_handler('error_handler');

header('Content-Type: application/json');

$method = $_SERVER['REQUEST_METHOD'];

if ($method != 'POST') {
  http_response_code(404);
  print(json_encode([
    'error' => 'Not Found',
    'message' => 'Cannot $method /api/orders.php'
  ]));
} else if (empty($_SESSION['cartId'])) {
  http_response_code(400);
  print(json_encode([
    'error' => 'Not Found',
    'message' => 'active shopping cart not found'
  ]));
} else {
  $order = getBodyData();
  $order = json_decode($order, true);
  if (empty($order['name'])) {
    http_response_code(400);
    print(json_encode([
      'error' => 'Not Found',
      'message' => 'name not provided in order'
    ]));
  } else if (empty($order['creditCard'])) {
    http_response_code(400);
    print(json_encode([
      'error' => 'Not Found',
      'message' => 'credit card not provided in order'
    ]));
  } else if (empty($order['shippingAddress'])){
    http_response_code(400);
    print(json_encode([
      'error' => 'Not Found',
      'message' => 'shipping address not provided in order'
    ]));
  } else {
    $cartId = $_SESSION['cartId'];
    $name = $order['name'];
    $shippingAddress = $order['shippingAddress'];
    $creditCard = $order['creditCard'];

    $transactionResult = mysqli_query($conn, 'START TRANSACTION');

    if (!$transactionResult) {
      throw new Exception(mysqli_error($conn));
    }

    $query = "INSERT INTO `orders` SET `cartId` = $cartId, `name` = $name, `shippingAddress` = $shippingAddress, `createdAt` = NOW()";

    $result = mysqli_query($conn, $query);

    if (!$result) {
      throw new Exception(mysqli_error($conn));
    }
    if (mysqli_affected_rows($conn) < 1) {
      mysqli_query($conn, 'ROLLBACK');
      throw new Exception('there was an error adding to cart');
    }
    mysqli_query($conn, 'COMMIT');
    http_response_code(201);
    print($order);
  }
}

?>
