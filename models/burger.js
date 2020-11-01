const orm = require("../config/orm")

var burger = {
  select: function(cb){
    orm.selectAll("burgers", function(res){
      cb(res)
    })
  },
  insert: function(column, values, cb){
    orm.insertOne("burgers", column, values, function(res){
      cb(res)
    })
  },
  update: function(values, condition, cb){
    orm.updateOne("burgers", values, condition, function(res){
      cb(res)
    })
  },
  delete: function(condition, cb){
    orm.deleteOne("burgers", condition, function(res){
      cb(res)
    })
  }
}
module.exports = burger