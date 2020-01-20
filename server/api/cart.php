<?php

if ($request['method'] === 'GET') {
  if(empty($_SESSION['cartId'])) {
    $response['body'] = [];
    send($response);
  }
}

?>
