var express = require('express')    //express 모듈 불러오기
var app = express()
app.listen(3000, function(){    //3000이란 포트를 기반으로 function 함수 실행
    console.log("start!! express server on port 3000!");
});  

app.get('/', function(req,res){ //콜백함수 (비동기)
    //res.send("hi, friend!") // 사이트에 바로 보여주기 <h1>도 사용 가능
    res.sendFile(__dirname + "/main.html")  //서버에 이 경로에 있는 html 파일 실행한 값 보여줌
})  
