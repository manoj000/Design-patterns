var user = function (name){
  var name = name;
  var description = function(name){
    console.log("User factory : task is complted - " + this.name);
  }
  return{
    name :name,
    description:description,

  }
}

module.exports =  user;
