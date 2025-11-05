<?php
header('Access-Control-Allow-Origin:*');
$users = [
    ['id' => 1, 'name'=>'川川','email'=>'12345678987@qq.com'],
    ['id' => 2, 'name'=>'乐乐','email'=>'23730078987@qq.com'],
]
// 根据用户名获取用户
if(isset($_GET['name'])){
    $response = array_filter($users,function($user){
        return $user['name'] == $_GET;
    })
    if($response){
        die(json_encode(array_pop($response)));
    }else{
        die(header('HTTP/1.1 404'));
    }
}