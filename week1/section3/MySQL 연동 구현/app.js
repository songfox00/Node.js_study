var express = require('express')    //express 모듈 불러오기
var app = express()
var bodyParser = require('body-parser')
var mysql=require('mysql')

var connection=mysql.createConnection({
    host : 'localhost',
    port : 3306,
    user : 'root',
    password : 'LunMoon2423',
    database : 'jsman'
})

connection.connect()

app.listen(3000, function(){    //3000이란 포트를 기반으로 function 함수 실행
    console.log("start!! express server on port 3000!");
});  

app.use(express.static('public'))   //public을 staic 디렉토리로 정해놓음
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true})) 
app.set('view engine', 'ejs') //view engine는 ejs야

//url routing 
app.get('/', function(req,res){ //콜백함수 (비동기)
    console.log('test');
    res.sendFile(__dirname + "/main.html")
})

app.get('/main', function(req,res){ 
    res.sendFile(__dirname + "/main.html")
})

app.post('/email_post', function(req, res){
    console.log(req.body.email) //적은 이메일 가져오기
    //res.send("<h1>welcome "+req.body.email+"</h1>")
    //res.send("post response")
    res.render('email.ejs', {'email' : req.body.email}) //ejs에 email이란 네임 값을 찾아서 req.body.email 값으로 치환해서 브라우저에 응답
})

app.post('/ajax_send_email', function(req,res){
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
