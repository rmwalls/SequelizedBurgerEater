// Import the ORM to create functions that will interact with the database.
const orm = require("../config/orm.js");

//call the orm functions using burger specific input, cb=callback
var burger = {
  showAll:  function(cb){
    orm.showAll("burgers",function(res){
      cb(res);
    })
  }, 
  create:  function(burger_name, cb){
    orm.insertOne("burger_name", burger_name, function(res){
      cb(res);
    })
  }, 
  devourBurger: function(id, value, cb){
    //console.log(value)
     orm.updateOne("burgers","devoured",value,"id",id,function(res){
      cb(res);
     })
  },
  yuckyBurger: function(id, cb){
    orm.deleteOne("burgers","id",id,function(res){
      cb(res);
    })
  }
}
module.exports=burger;