<?php

if ($request['method'] === 'POST') {

  if (!isset($_SESSION['cartId'])) {
    throw new ApiError('active shopping cart required', 400);
  }
  $cartId = $_SESSION['cartId'];

  $order = $request['body'];
  if (!isset($order['name'])) {
    throw new ApiError('valid name required', 400);
  }
  if (!isset($order['shippingAddress'])) {
    throw new ApiError('valid shipping address required', 400);
  }
  if (!isset($order['creditCard'])) {
    throw new ApiError('valid credit card required', 400);
  }


}  else {
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
