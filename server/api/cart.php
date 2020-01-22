<?php

if ($request['method'] === 'GET') {
  if(!isset($_SESSION['cartId'])) {
    $response['body'] = [];
    send($response);
  }
  $link = get_db_link();
  $cartId = $_SESSION['cartId'];
  sendCart($link, $cartId, $response);
}

if ($request['method'] === 'POST') {
  if(isset($request['body']['productId'])) {
    $productId = $request['body']['productId'];
    if (!is_numeric($productId) || $productId <= 0) {
      throw new ApiError('valid productId is required', 400);
    }

    $link = get_db_link();

    $priceQuery = "SELECT `price` FROM `products` WHERE `id` = $productId";
    $result = mysqli_query($link, $priceQuery);
    if (mysqli_num_rows($result) === 0) {
      throw new ApiError('invalid productId: '.$productId, 400);
    }
    $productData = mysqli_fetch_assoc($result);
    $productPrice = $productData['price'];

    if (!isset($_SESSION['cartId'])) {
      $newCartQuery = "INSERT INTO `carts` SET `createdAt` = CURRENT_TIMESTAMP";
      $newCartResult = mysqli_query($link, $newCartQuery);
      $cartId = mysqli_insert_id($link);
      $_SESSION['cartId'] = $cartId;
    } else {
      $cartId = $_SESSION['cartId'];
    }

    $transactionResult = mysqli_query($link, 'START TRANSACTION');

    $insertQuery = "INSERT INTO `cartItems` SET `price` = $productPrice, `count` = 1, `productId` = $productId, `cartId` = $cartId, `added` = NOW() ON DUPLICATE KEY UPDATE `count`=`count` + 1";
    $insertResult = mysqli_query($link, $insertQuery);

    if (mysqli_affected_rows($link) < 1) {
      mysqli_query($link, 'ROLLBACK');
      throw new ApiError('error adding to cart', 400);
    }
    $cartItemId = mysqli_insert_id($link);
    mysqli_query($link, 'COMMIT');

    $responseQuery = "SELECT c.`cartItemId` AS `id`, c.`productId`, p.`name`, p.`price`, c.`count`,
                      (SELECT i.url FROM product_images AS i WHERE c.`productId` = i.product_id LIMIT 1) AS image,
                      p.`shortDescription`
                      FROM cartItems AS c
                      JOIN products AS p ON c.`productId` = p.`id`
                      WHERE c.`cartItemId` = $cartItemId";

    $result = mysqli_query($link, $responseQuery);
    $cartItemData = mysqli_fetch_assoc($result);
    $cartItemData['id'] = (int) $cartItemData['id'];
    $cartItemData['productId'] = (int) $cartItemData['productId'];
    $cartItemData['count'] = (int) $cartItemData['count'];
    $cartItemData['price'] = (int) $cartItemData['price'];
    $response['body'] = $cartItemData;
    send($response);
  }
}

if ($request['method'] === 'PATCH') {

  if (!isset($request['body']['cartItemId'])) {
    throw new ApiError('cart item id required', 400);
  }

  $cartItemId = (int) $request['body']['cartItemId'];
  if (!is_numeric($cartItemId) || $cartItemId <= 0) {
    throw new ApiError('invalid cart item id', 400);
  }

  $incDec = (int) $request['body']['incDec'];
  if ($incDec !== 1 && $incDec !== -1) {
     throw new ApiError('invalid inc dec value', 400);
  }

  $cartId = $_SESSION['cartId'];
  $link = get_db_link();

  $transactionResult = mysqli_query($link, 'START TRANSACTION');
  $updateQuery = "UPDATE `cartItems` SET `count` = `count` + $incDec  WHERE `cartItems`.`cartItemId` = $cartItemId";
  $updateResult = mysqli_query($link, $updateQuery);
  if (mysqli_affected_rows($link) < 1) {
    mysqli_query($link, 'ROLLBACK');
    throw new ApiError('error updating cart', 400);
  }
  mysqli_query($link, 'COMMIT');

  $responseQuery = "SELECT c.`cartItemId` AS `id`, c.`productId`, `products`.`name`, `products`.`price`, c.`count`,
                      (SELECT i.url FROM product_images AS i WHERE c.`productId` = i.product_id LIMIT 1) AS image,
                      `products`.`shortDescription`
                      FROM cartItems AS c
                      JOIN products ON c.`productId` = `products`.`id`
                      WHERE c.`cartItemId` = $cartItemId";
  $result = mysqli_query($link, $responseQuery);
  $cartItemData = mysqli_fetch_assoc($result);
  $cartItemData['id'] = (int) $cartItemData['id'];
  $cartItemData['productId'] = (int) $cartItemData['productId'];
  $cartItemData['count'] = (int) $cartItemData['count'];
  $cartItemData['price'] = (int) $cartItemData['price'];
  $response['body'] = $cartItemData;
  send($response);
}

if ($request['method'] === 'DELETE') {
  if (!isset($request['body']['cartItemId'])) {
    throw new ApiError('cart item id required', 400);
  }
  $cartItemId = $request['body']['cartItemId'];
  if (!is_numeric($cartItemId) || $cartItemId <= 0) {
    throw new ApiError('invalid cart item id', 400);
  }
  $cartId = $_SESSION['cartId'];
  $link = get_db_link();

  $deleteQuery = "DELETE FROM `cartItems` WHERE `cartItems`.`cartItemId` = $cartItemId AND `cartItems`.`cartId` = $cartId";
  $result = mysqli_query($link, $deleteQuery);

  sendCart($link, $cartId, $response);
}

function sendCart($link, $cartId, &$response) {
  $cartQuery = "SELECT c.`cartItemId` AS id, c.`productId`, p.`name`, c.`price`, c.`count`,
                       (SELECT i.`url` FROM product_images AS i WHERE c.`productId` = i.product_id LIMIT 1) AS image,
                       p.`shortDescription`
                  FROM cartItems AS c
                  JOIN products AS p ON c.`productId` = p.id
                  WHERE c.cartId = $cartId";
  $result = mysqli_query($link, $cartQuery);
  $cartItems = [];
  while ($row = mysqli_fetch_assoc($result)) {
    $row['id'] = (int) $row['id'];
    $row['count'] = (int) $row['count'];
    $row['price'] = (int) $row['price'];
    $cartItems[] = $row;
  }
  $response['body'] = $cartItems;
  send($response);
}

?>
