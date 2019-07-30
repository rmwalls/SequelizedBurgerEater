// Import MySQL connection.
const connection = require("./connection");


var orm = {
  showAll: function (table, cb) {
    var queryString = "SELECT * FROM ??";
    connection.query(queryString, table, function (err, result) {
      if (err) throw err;
      cb(result);
    });
  },
  insertOne: function (col, value, cb) {
    var queryString = "INSERT INTO burgers (??) VALUES(?);";
    connection.query(queryString, [col, value], function (err, result) {
      if (err) throw err;
      cb(result);
    });
  },
  updateOne: function (table, UPD_col, newValue, WHERE_col, id_value, cb) {
    var queryString = "UPDATE ?? SET ?? = ? WHERE ?? = ?";
    connection.query(queryString, [table, UPD_col, newValue, WHERE_col, id_value], function (err, result) {
      if (err) throw err;
      cb(result);
    });
  },
  deleteOne: function (table, WHERE_col, id_value, cb) {
    var queryString = "DELETE FROM ?? WHERE ?? = ?";
    connection.query(queryString, [table, WHERE_col, id_value], function (err, result) {
      if (err) throw err;
      cb(result);
    });
  }
}
module.exports = orm;