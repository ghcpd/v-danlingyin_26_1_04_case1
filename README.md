# Simple Task Runner

A simple Node.js-based task runner that allows executing predefined tasks via command line.

## Setup

### Prerequisites
- Node.js (version not specified in package.json, but required to run JavaScript)

### Installation
1. Clone or download the project.
2. Navigate to the project directory.
3. Run `npm install` to install dependencies (none currently listed in package.json).

## Usage

Run tasks using the command line:

```
node src/input.js <taskName>
```

Replace `<taskName>` with the name of the task to execute.

### Available Tasks
- `build`: Logs "Building project..."
- `test`: Logs "Running tests..."

### Example
```
node src/input.js build
```

This will output: "Building project..."

## Architecture

The project consists of three main modules:

- `src/input.js`: Entry point that parses command line arguments and calls the task runner.
- `src/taskRunner.js`: Contains the `runTask` function that looks up and executes tasks.
- `src/tasks.js`: Defines the available tasks as an object with task names as keys and functions as values.

## Contributing

To add a new task:
1. Open `src/tasks.js`.
2. Add a new property to the exported object with the task name as key and a function as value.
3. The function should contain the task logic.

Example:
```javascript
module.exports = {
  build() {
    console.log("Building project...");
  },
  test() {
    console.log("Running tests...");
  },
  deploy() {
    console.log("Deploying...");
  }
};
```

Note: The `package.json` includes a "start" script pointing to `src/index.js`, but this file does not exist. Use `node src/input.js` directly instead.