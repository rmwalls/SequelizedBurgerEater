var mysql = require("mysql");
var connection;

// create the connection information for the sql database
if (process.env.JAWSDB_URL) {
connection = mysql.createConnection(process.env.JAWSDB_URL)
} else {
  connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "burgers_db"
});
};

connection.connect(function(err) {
  if (err) throw err;
  console.log("connected as id " + connection.threadId + "\n");
  readburgers();
});

function readburgers() {
  connection.query("SELECT * FROM burgers", function(err, res) {
    if (err) throw err;

    // Log all results of the SELECT statement
    //console.log("in connection.js, line 23" + res);
    //connection.end();
  });
}
module.exports=connection;