## 강사님께서는 static 디렉토리를 public으로 설정해 두시고 res.sendFile(__dirname + "/public/main.html")을 실행했는데도 img가 잘 나오는데 왜 나는 /public을 없애야 img가 나오는 것일까

### apps.js 코드
```
app.use(express.static('public'))   //public을 staic 디렉토리로 정해놓음

//url routing 
app.get('/', function(req,res){ //콜백함수 (비동기)
    console.log('test');
    res.sendFile(__dirname + "/main.html")
})
```
### main.html 코드
```
<!doctype html>
<html>
    <head>
        <title>main.html</title>
    </head>
    <body>
    <h1>main page</h1>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    <img src="images/Harry.jpg" alt="" width="300px">   //public을 static 디렉토리로 설정해 놓아서 가능
    <script src="main.js"></script> 
    </body>
</html>
```
