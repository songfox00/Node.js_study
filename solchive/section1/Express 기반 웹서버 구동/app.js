var express = require('express')    //express 모듈 불러오기
var app = express()
app.listen(3000, function(){    //3000이란 포트를 기반으로 function 함수 실행
    console.log("start! express server on port 3000!");
}); 
