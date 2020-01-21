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

  $link = get_db_link();
  $stmt = mysqli_prepare($link, "INSERT INTO `orders` (`cartId`, `name`, `shippingAddress`, `creditCard`, `createdAt`) VALUES (?, ?, ?, ?, CURRENT_TIMESTAMP)");
  mysqli_stmt_bind_param($stmt, "issi", $cartId, $order['name'], $order['shippingAddress'], $order['creditCard']);
  mysqli_stmt_execute($stmt);

}

?>
