var task = require("./task.js");
var repoFactory = require("./repoFactory.js");

var user = new task(repoFactory.getRepo("user").description("user"));
var company = new task(repoFactory.getRepo("company").description("company"));
var others = new task(repoFactory.getRepo("others").description("others"));
