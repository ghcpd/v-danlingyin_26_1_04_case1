# simple-task-runner

Minimal, synchronous task runner (single-file tasks) — executes named tasks exported from `src/tasks.js` via a small CLI in `src/input.js` or programmatically via `src/taskRunner.js`.

---

## Quickstart ✅

Prerequisites
- Node.js installed on your machine (required to run the scripts). The repository does not specify an `engines` field.

Run (manual)
- Run a task by name:

  `node src/input.js <task-name>`

  Examples:
  - `node src/input.js build`  → prints `Building project...`
  - `node src/input.js test`   → prints `Running tests...`

Important note (start script)
- `package.json` defines `"start": "node src/index.js"`, but **`src/index.js` is not present**. Running `npm start` will fail in this repository. Use the CLI above as a workaround.

---

## Project structure 🔧

- `package.json` — project metadata (contains a broken `start` script pointing to `src/index.js`).
- `src/input.js` — CLI entry: reads `process.argv[2]` and calls `runTask(taskName)`.
- `src/taskRunner.js` — exports `runTask(name)`; validates task existence and invokes it.
- `src/tasks.js` — object with available tasks (currently: `build`, `test`).

---

## Usage

CLI
- `node src/input.js <task>` — required. If no task provided, the CLI throws: `Task name is required`.

Programmatic
- Call tasks from code:

  ```js
  const { runTask } = require('./src/taskRunner');
  runTask('build');
  ```

Behavior / errors
- If an unknown task is passed `runTask` throws: `Unknown task: <name>`.
- Tasks are invoked synchronously (the runner calls `task()` and does not await a returned Promise). As a result, asynchronous tasks will not be awaited by the runner.

Evidence (examples from source)
- CLI requires argument: `process.argv[2]` (`src/input.js`).
- Available tasks: `build`, `test` (`src/tasks.js`).
- Exported API: `module.exports = { runTask }` (`src/taskRunner.js`).

---

## How to add or modify tasks (contribution)

- Add a named function to `src/tasks.js` and export it on the object. Example:

  ```js
  module.exports.deploy = function deploy() {
    console.log('Deploying...');
  };
  ```

- Validate manually: `node src/input.js deploy` → expect `Deploying...`.

Notes for contributors
- There are no automated tests or linting configured in this repository — add tests and CI in a follow-up change.
- Consider updating `package.json` (fix `start`) and adding an `engines` field and a `test` script.

---

## Known limitations (explicit)

- Missing `src/index.js` while `package.json` points to it (prevents `npm start`).
- No automated tests or test runner configured.
- Runner does not await asynchronous task functions.
- No license or repository metadata in `package.json`.

---

## Validation (what you can run locally)

- `node src/input.js build`  → prints `Building project...`
- `node src/input.js test`   → prints `Running tests...`
- `node src/input.js`        → throws `Task name is required`
- `node src/input.js unknown`→ throws `Unknown task: unknown`

---

## Recommended next steps (non-breaking, documentation-first)

- Fix `package.json` start script to `node src/input.js` or add an `index.js` wrapper.
- Add a `test` script and at least one automated test.
- Add `engines`, `license`, and `repository` fields to `package.json`.

---

## Contact / contribution

Open a PR with small, focused changes (fix `start`, add tests, add CI). Keep changes limited to docs + tests in the first patch.