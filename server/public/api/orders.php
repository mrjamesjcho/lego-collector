<?php

require_once('functions.php');
set_exception_handler('error_handler');

header('Content-Type: application/json');

$method = $_SERVER['REQUEST_METHOD'];
$order = getBodyData();

if ($method != 'POST') {
  http_response_code(404);
  print(json_encode([
    'error' => 'Not Found',
    'message' => 'Cannot $method /api/orders.php'
  ]));
} else if (empty($_SESSION['cartId'])) {
  http_response_code(400);
  print(json_encode([
    'error' => 'ApiError'
  ]));
} else {
  $cartId = $_SESSION['cartId'];
  http_response_code(201);
  print($order);
}
