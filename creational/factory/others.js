var others = function (name){
  var name = name;
  var description = function(){
    console.log("others factory : task is complted - " + this.name);
  }
  return{
    name :name,
    description:description,

  }
}

module.exports =  others;
