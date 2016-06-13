var repoFactory = function (name){
  this.getRepo = function(data){
    if(data == "user"){
      var user = require("./user.js")();
      return user;
    }
    if(data == "company"){
      var user = require("./company.js")();
      return user;
    }
    if(data == "others"){
      var user = require("./others.js")();
      return user;
    }
  }
}

module.exports = new repoFactory;
