# simple-task-runner

A minimal, code-only task runner implemented in CommonJS JavaScript.

> This README documents the project strictly from the existing source files. It does not add or assume behavior not present in the code.

## What this project contains 🔧
- `package.json` — project metadata and npm scripts (note: `start` currently points to a missing file; see "Known issue").
- `src/input.js` — CLI entry that reads `process.argv[2]` and calls `runTask`.
- `src/taskRunner.js` — looks up a task by name and executes it; throws on unknown tasks.
- `src/tasks.js` — exported task implementations (currently `build` and `test`).

## Requirements ⚙️
- Node.js installed on your system (the code uses CommonJS modules).

## How to run (exact, verified) ✅
Run a task by passing its name as the first CLI argument to `src/input.js`.

Examples:
- Run the `build` task:

  `node src/input.js build`

  Expected output: `Building project...`

- Run the `test` task:

  `node src/input.js test`

  Expected output: `Running tests...`

Behavior notes (from code):
- If no task name is provided, `src/input.js` throws: `Task name is required`.
- If an unknown task name is provided, `src/taskRunner.js` throws: `Unknown task: <name>`.

## Available tasks (from `src/tasks.js`) 📋
- `build()` — prints `Building project...`.
- `test()` — prints `Running tests...`.

There are no other tasks defined in the codebase.

## Known issue (important) ⚠️
- `package.json` contains a `start` script that runs `node src/index.js`, but `src/index.js` does not exist in this repository. Running `npm start` will fail unless `package.json` is updated or `src/index.js` is added.

Evidence (exact):
- `package.json` → `"start": "node src/index.js"`
- Files present: `src/input.js`, `src/taskRunner.js`, `src/tasks.js` (no `src/index.js`).

Recommended (documentation-only) guidance for contributors:
- Use `node src/input.js <task>` to run tasks.
- If you want `npm start` to work, either add `src/index.js` or change `package.json` to use `node src/input.js <task>`.

## Project structure (short) 🗂️
- `src/input.js` — CLI parsing and single-argument requirement.
- `src/taskRunner.js` — task lookup + execution, error on unknown task.
- `src/tasks.js` — concrete task implementations.

## Tests & CI
- There are no automated tests or CI configuration files in the repository. The `test` task only logs `Running tests...` and does not execute a test suite.

## Contributing
- No CONTRIBUTING.md or contribution instructions are present. For small changes, open a PR describing the change and how to verify it locally (run `node src/input.js <task>`).

## License
- No license file detected in the repository.
