# reqire
모듈 불러오는 함수

var require = function(src){                 
    var fileAsStr = readFile(src)           
    var module.exports = {}                  
    eval(fileAsStr)                      
    return module.exports                   
}
