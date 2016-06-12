var task = function (name){
  this.name = name;
  this.description = "this is the description of task :" + this.name ;
}

task.prototype.complete = function (){
  console.log("task is complted - " + this.name);
}

task.prototype.save = function (){
  console.log("task is saved - " + this.name);
}

module.exports = task;
