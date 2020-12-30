var express = require('express')    //express 모듈 불러오기
var app = express()
var router = express.Router();
var path=require('path'); //상대경로
var mysql=require('mysql')

// DATABASE SETTING
var connection=mysql.createConnection({
    host : 'localhost',
    port : 3306,
    user : <>,
    password : <>,
    database : 'jsman'
})

connection.connect()

// ROUTER
router.get('/', function(req, res){
    console.log('get join url');
    res.sendFile(path.join(__dirname, '../../public/join.html'))
})

module.exports=router;
