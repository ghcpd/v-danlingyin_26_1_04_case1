const tasks = require("./tasks");

function runTask(name) {
  const task = tasks[name];

  if (!task) {
    throw new Error(`Unknown task: ${name}`);
  }

  task();
}

module.exports = { runTask };
