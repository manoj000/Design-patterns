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

var task1 = new task("task 1");
var task2 = new task("task 2");
var task3 = new task("task 3");

task1.complete();
task2.save();
task3.save();
