# simple-task-runner

A minimal Node.js CLI that runs named tasks defined in `src/tasks.js`.

## Requirements
- Node.js (CommonJS). Any current LTS should work.
- `npm` (for running scripts), though there are no external dependencies.

## Setup
```bash
npm install
```
> No dependencies are listed, but this ensures tooling is ready.

## Usage
### Direct CLI
```bash
node src/input.js <taskName>
```
- **Required**: `taskName` (string)
- Errors:
  - Missing `taskName` → throws `Error("Task name is required")` (`src/input.js`, lines 5–7)
  - Unknown `taskName` → throws `Error("Unknown task: <name>")` (`src/taskRunner.js`, lines 6–8)

### Available tasks (`src/tasks.js`)
- `build()` → logs `"Building project..."`
- `test()` → logs `"Running tests..."`

### `npm start` (note)
`package.json` defines `"start": "node src/index.js"`, but `src/index.js` does **not** exist. Use the direct CLI command above or update `package.json` to point to `src/input.js` if desired.

## Architecture
- `src/input.js`: CLI entry point; parses `process.argv[2]` for `taskName` and delegates to `runTask`.
- `src/taskRunner.js`: Looks up the task by name from `tasks` and executes it; throws on unknown tasks.
- `src/tasks.js`: Exports task functions.

## Extending
1. Add a new function to `src/tasks.js`, e.g.:
   ```js
   deploy() { console.log("Deploying..."); }
   ```
2. Run it via:
   ```bash
   node src/input.js deploy
   ```

## Testing
- There is no automated test framework configured.
- The `test` task only logs a message; it does not run tests.

## Notes
- Keep task functions side-effect aware; `runTask` does not catch errors thrown inside tasks.
- All tasks run synchronously.
