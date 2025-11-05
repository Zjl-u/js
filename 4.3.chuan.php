<?php
header('Access-Control-Allow-Origin:*');
$lessons = [
    1 => ['js' => 60, 'ts' => '89'],
    2 => ['js' => 34, 'ts' => '58'],
]
if(isset($_GET['id'])){
    $ids = explode(',',$_GET['id']);
    $response = array_filter($lessons,function($v,$k)) us({
        return in_array($k,$ids);
    },ARRAY_FILTER_USE_BOTH);
    sort($response);
    die(json_encode($response));
}