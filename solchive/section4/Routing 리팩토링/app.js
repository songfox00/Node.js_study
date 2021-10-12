var express = require('express')    //express 모듈 불러오기
var app = express()
var bodyParser = require('body-parser')
var router=require('./router/index')

app.listen(3000, function(){    //3000이란 포트를 기반으로 function 함수 실행
    console.log("start!! express server on port 3000!");
});  

app.use(express.static('public'))   //public을 staic 디렉토리로 정해놓음
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true})) 
app.set('view engine', 'ejs') //view engine는 ejs야
app.use(router)

