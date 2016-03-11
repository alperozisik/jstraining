<?php

header('Access-Control-Allow-Origin: *');  
    header("Access-Control-Allow-Credentials: true");
    header('Access-Control-Allow-Methods: GET, PUT, POST, DELETE, OPTIONS');
    header('Access-Control-Max-Age: 1000');
    header('Access-Control-Allow-Headers: Content-Type, Content-Range, Content-Disposition, Content-Description, MyHeader, User-Agent');


    header("Content-Type: text/plain");
    header("XDomainRequestAllowed: 1");
    header("Content-Length: 27");
    echo "Some data";
    flush();
    echo "Some data";
    flush();
    echo "Some data";
    flush();    
?>