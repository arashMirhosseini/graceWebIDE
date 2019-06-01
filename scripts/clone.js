var Git = require("nodegit");

Git.Clone("https://github.com/nodegit/nodegit", "nodegit_testing").then(function (repository) {
  console.log("cloning");
});