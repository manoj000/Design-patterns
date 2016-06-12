var task = require("./task.js");

var task1 = new task("task 1");
var task2 = new task("task 2");
var task3 = new task("task 3");

task1.complete();
task2.save();
task3.save();
