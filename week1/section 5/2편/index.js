var express = require('express')    //express 모듈 불러오기
var app = express()
var router = express.Router();
var path=require('path'); //상대경로
var mysql=require('mysql')

// DATABASE SETTING
var connection=mysql.createConnection({
    host : 'localhost',
    port : 3306,
    user : 'root',
    password : 'LunMoon2423',
    database : 'jsman'
})

connection.connect()

// ROUTER
router.get('/', function(req, res){
    console.log('get join url');
    res.sendFile(path.join(__dirname, '../../public/join.html'))
})

router.post('/', function(req, res){
    var body=req.body;
    var email=body.email;
    var name=body.name;
    var passwd=body.password;

    var query=connection.query('insert to user (email,name,pw) values ("'+ email +'", "'+ name +'","'+ passwd +'")', function (err,rows){
        if(err) {throw err;}
        console.log("ok db insert");
    });
})

module.exports=router;
