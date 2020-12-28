var express = require('express')    //express 모듈 불러오기
var app = express()
var router = express.Router();
var path=require('path'); //상대경로
var main= require('./main/main')
var email= require('./email/email')
var join= require('./join/index')

//url routing 
router.get('/', function(req,res){ //콜백함수 (비동기)
    res.sendFile(path.join(__dirname , '../public/main.html'))
})

router.use('/main', main) //main으로 들어오면 main.js를 씀
router.use('/email', email)
router.use('/join', join)

module.exports=router;
