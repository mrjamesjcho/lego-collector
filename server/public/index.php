<?php

require_once '../api/_lifecycle.php';

switch ($request['path']) {
  case '/':
    readfile('index.html');
    exit;
  case '/api/health-check':
    require_once "../api/health-check.php";
  case '/api/products':
    require_once "../api/products.php";
  case '/api/cart':
    require_once "../api/cart.php";
  case '/api/orders':
    require_once "../api/orders.php";
  default:
    throw new ApiError("Cannot ${request['method']} ${request['path']}", 404);
}

?>
