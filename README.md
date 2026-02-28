# Simple Task Runner

A lightweight command-line task runner for executing predefined build and test operations.

## Overview

Simple Task Runner is a Node.js utility that allows you to define and execute tasks via command line. It provides a simple, extensible architecture for running common development tasks like building and testing.

## Requirements

- **Node.js**: This project requires Node.js to be installed on your system
- **Operating System**: Cross-platform (Windows, macOS, Linux)

## Installation

1. Clone or download this repository
2. Navigate to the project directory:
   ```bash
   cd simple-task-runner
   ```
3. No additional dependencies need to be installed - the project uses only Node.js built-in modules

## Usage

### Running Tasks

Execute tasks using the npm start script with a task name:

```bash
npm start <task-name>
```

Or run directly with Node.js:

```bash
node src/input.js <task-name>
```

### Available Tasks

#### build
Executes the build task.

```bash
npm start build
```

**Output:**
```
Building project...
```

#### test
Executes the test task.

```bash
npm start test
```

**Output:**
```
Running tests...
```

### Error Handling

The task runner validates input and provides clear error messages:

- **No task name provided:**
  ```
  Error: Task name is required
  ```
  
- **Unknown task name:**
  ```
  Error: Unknown task: <task-name>
  ```

## Project Structure

```
simple-task-runner/
├── package.json          # Project metadata and npm scripts
└── src/
    ├── input.js         # Entry point - handles CLI arguments
    ├── taskRunner.js    # Core task execution logic
    └── tasks.js         # Task definitions
```

### File Descriptions

#### src/input.js
- **Purpose:** Entry point for the application
- **Functionality:**
  - Parses command-line arguments (`process.argv[2]`)
  - Validates that a task name is provided
  - Delegates execution to the task runner
  - Throws an error if no task name is provided

#### src/taskRunner.js
- **Purpose:** Core task execution engine
- **Exports:** `runTask(name)` function
- **Functionality:**
  - Looks up the requested task from the tasks registry
  - Validates that the task exists
  - Executes the task function
  - Throws an error if task is not found

#### src/tasks.js
- **Purpose:** Task registry containing all available tasks
- **Exports:** Object with task name keys and function values
- **Current Tasks:**
  - `build()`: Logs "Building project..."
  - `test()`: Logs "Running tests..."

## Extending the Project

### Adding New Tasks

To add a new task, edit [src/tasks.js](src/tasks.js):

```javascript
module.exports = {
  build() {
    console.log("Building project...");
  },
  test() {
    console.log("Running tests...");
  },
  // Add your new task here
  deploy() {
    console.log("Deploying application...");
  }
};
```

Then run it:
```bash
npm start deploy
```

### Task Implementation Guidelines

- Each task should be a function (synchronous or asynchronous)
- Tasks receive no parameters
- Tasks can perform any Node.js operations (file I/O, process spawning, etc.)
- Use `console.log()` for output
- Throw errors for failure conditions

## Architecture

The project follows a simple three-layer architecture:

1. **Input Layer** (`input.js`): CLI argument parsing and validation
2. **Execution Layer** (`taskRunner.js`): Task lookup and execution
3. **Task Registry** (`tasks.js`): Task definitions

**Flow:**
```
CLI → input.js → taskRunner.js → tasks.js → Execute Task
```

## Troubleshooting

### "Task name is required" error
- **Cause:** No task name was provided as a command-line argument
- **Solution:** Provide a task name: `npm start build`

### "Unknown task: <name>" error
- **Cause:** The requested task does not exist in tasks.js
- **Solution:** Check available tasks in [src/tasks.js](src/tasks.js) or add the missing task

### "npm: command not found"
- **Cause:** Node.js/npm is not installed or not in PATH
- **Solution:** Install Node.js from https://nodejs.org/

## License

This project does not currently specify a license.

## Contributing

To contribute to this project:
1. Understand the architecture (see above)
2. Add or modify tasks in [src/tasks.js](src/tasks.js)
3. Ensure error handling follows existing patterns
4. Test your changes with `npm start <task-name>`
