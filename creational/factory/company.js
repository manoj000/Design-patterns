var company = function (name){
  var name = name;
  var description = function(name){
    console.log("company factory : task is complted - " + this.name);
  }
  return{
    name :name,
    description:description,

  }
}
module.exports =  company;
