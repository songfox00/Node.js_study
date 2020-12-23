var express = require('express')    //express 모듈 불러오기
var app = express()
app.listen(3000, function(){    //3000이란 포트를 기반으로 function 함수 실행
    console.log("start!! express server on port 3000!");
});  

app.use(express.static('public'))   //public을 staic 디렉토리로 정해놓음

//url routing 
app.get('/', function(req,res){ //콜백함수 (비동기)
    console.log('test');
    res.sendFile(__dirname + "/main.html")
})

app.get('/main', function(req,res){ //localhost:3000/main
    res.sendFile(__dirname + "/main.html")
})
