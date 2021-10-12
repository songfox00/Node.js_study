var express = require('express')    //express 모듈 불러오기
var app = express()
var router = express.Router();
var path=require('path'); //상대경로

router.get('/', function(req,res){ 
    console.log('main js loaded')
    res.sendFile(path.join(__dirname, "../public/main.html"))//현재 경로에서 하나 올라가서 찾아줘
});

module.exports = router;    //다른 파일에서 main.js를 쓸 수 있음

