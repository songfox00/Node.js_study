## reqire
모듈 불러오는 함수

var require = function(src){                 
    var fileAsStr = readFile(src)           
    var module.exports = {}                  
    eval(fileAsStr)                      
    return module.exports                   
}

## 동기/비동기
함수 안에 있는 코드는 비동기 이므로 나중에 실행

밖에 있는 코드 먼저 실행

## 현재 디렉토리 절대 경로
__dirname + "/그 이후 경로"
