const connection = require("./connection");
//creating a question mark function to define the amount of question marks needed in the value portion
function questionMarks (num){
  var arr = [];
  for (var i = 0; i<num; i++){
    arr.push("?");
  }

  return arr.toString();
}
  
  var orm = {
  selectAll: function(table, cb){
    var queryString = `SELECT * FROM ${table}`;
    connection.query(queryString, function (err, data){
      if (err) throw err;
      cb(data);
    })
  },
  insertOne: function(table, column, values, cb){
    var queryString = `INSERT INTO ${table} (${column.toString()} VALUES (${questionMarks(values.length)})`;
    connection.query(queryString, values, function (err, data){
      if (err) throw err;
      cb(data);
    })
  },
  updateOne: function(table, values, condition, cb){
    var queryString = `UPDATE ${table} SET values  WHERE ${condition}`;
    connection.query(queryString, function (err, data){
      if (err) throw err;
      cb(data);
    })
  },
  deleteOne:function(table, condition, cb){
    const queryString = `DELETE FROM ${table} WHERE ${condition.toString()}`
    connection.query(queryString, function(err, data){
      if (err) throw err;
      cb(data);
    })
  }
}
module.exports = orm;