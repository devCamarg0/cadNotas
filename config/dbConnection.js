var mysql = require('mysql');

var connMySQL = function (){
    return mysql.createConnection({
        host : 'localhost',
        user : 'root',
        password : 'pedro3008',
        database : 'escola'
    });
}

module.exports = function (){
    return connMySQL;
};