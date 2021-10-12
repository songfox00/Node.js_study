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
router.post('/form', function(req, res){
    console.log(req.body.email) //적은 이메일 가져오기
    res.render('email.ejs', {'email' : req.body.email}) //ejs에 email이란 네임 값을 찾아서 req.body.email 값으로 치환해서 브라우저에 응답
})

router.post('/ajax', function(req,res){
    var email = req.body.email;
    var responseData={};

    var query=connection.query('select name from user where email="'+email +'"', function(err, rows){
        if(err) throw err;
        if(rows[0]){
            responseData.result="ok";
            responseData.name=rows[0].name;
        }
        else{
            responseData.result="none";
            responseData.name="";
        }
        res.json(responseData)
    })
})

module.exports=router;
