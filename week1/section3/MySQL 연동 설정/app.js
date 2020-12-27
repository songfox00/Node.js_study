var mysql=require('mysql')

var connection=mysql.createConnection({
    host : 'localhost',
    port : 3306,
    user : <user name>,
    password : <user password>,
    database : 'jsman'
})

connection.connect()
