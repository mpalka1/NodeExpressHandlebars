var orm = require("../config/orm.js");

var burger = {
    all: function(cb) {
      orm.all("burgers", function(res) {
        cb(res);
      });
    },
    // The variables cols and vals are arrays.
    create: function(name, cb) {
      orm.create("burgers", ["burger_name","eaten"],[name,false], function(res) {
        cb(res);
      });
    },
      update: function(id,cb) {
        var condition = "id ="+id;
        orm.update("burgers",{eaten:true},condition,cb)
    },
      delete: function(id,cb) {
        var condition = "id ="+id;
        orm.delete("burgers", condition,cb)
    }
  };
  
  // Export the for the app to use.
  module.exports = burger;