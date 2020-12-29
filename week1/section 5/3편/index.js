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

router.post('/', function(req, res){
    var body=req.body;
    var email=body.email;
    var name=body.name;
    var passwd=body.password;

    var sql = {email : email, name : name, pw : passwd};    //코드 짧게 바꾸기 가능
    var query=connection.query('insert into user set ?', sql , function (err,rows){
        if(err) throw err;
        else
        res.render('welcome.ejs', {'name': name, 'id': rows.insertId})
    });
})

module.exports=router;
