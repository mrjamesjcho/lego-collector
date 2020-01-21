<?php

if ($request['method'] === 'POST') {
  if (!isset($_SESSION['cartId'])) {
    throw new ApiError('active shopping cart required', 400);
  }


}  else {
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
