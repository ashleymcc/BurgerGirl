
var mysql = require("mysql");

if (process.env.JAWSDB_URL){
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {

    //I have to use these credentials instead of "root"
var connection = mysql.createConnection({
    port: 3306,
    host: "localhost",
    user: "newuser9",
    password: "YES",
    database: "burgers_db"
});
}


connection.connect(function (err) {
    if (err) {
        console.error("error connecting: " + err.stack);
        return;
    }
    console.log("connected as id " + connection.threadId);
});


module.exports = connection;
