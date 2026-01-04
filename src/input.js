const { runTask } = require("./taskRunner");

const taskName = process.argv[2];

if (!taskName) {
  throw new Error("Task name is required");
}

runTask(taskName);
