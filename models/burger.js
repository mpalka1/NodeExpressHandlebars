var orm = require("../config/orm.js");

var burger = {
    all: function(cb) {
      orm.all("ydzp0706rt009w1c.burgers", function(res) {
        cb(res);
      });
    },
    // The variables cols and vals are arrays.
    create: function(name, cb) {
      orm.create("ydzp0706rt009w1c.burgers", ["burger_name","eaten"],[name,false], function(res) {
        cb(res);
      });
    },
      update: function(id,cb) {
        var condition = "id ="+id;
        orm.update("ydzp0706rt009w1c.burgers",{eaten:true},condition,cb)
    },
      delete: function(id,cb) {
        var condition = "id ="+id;
        orm.delete("ydzp0706rt009w1c.burgers", condition,cb)
    }
  };
  
  // Export the for the app to use.
  module.exports = burger;