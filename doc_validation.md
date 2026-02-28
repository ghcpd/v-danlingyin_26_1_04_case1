# Documentation Validation Checklist ✅

This file maps identified missing documentation to the sections added in `README.md` and explains how a new developer can validate each item.

- Missing: Project README / Usage Guide
  - Added section: **How to run (exact, verified)** in `README.md`
  - Validation: Run `node src/input.js build` → expect `Building project...`.

- Missing: package.json scripts documentation / fix
  - Added section: **Known issue (important)** in `README.md` describing the `npm start` mismatch.
  - Validation: Run `npm start` (optional) — it will fail because `src/index.js` is missing; the README documents this behavior and the correct alternative command.

- Missing: Usage / CLI behavior
  - Added sections: **How to run** and **Behavior notes (from code)** in `README.md`.
  - Validation: Try `node src/input.js` without args → observe thrown error `Task name is required`.
  - Validation: Try `node src/input.js unknown` → observe thrown error `Unknown task: unknown`.

- Missing: Testing documentation
  - Added sections: **Available tasks** and **Tests & CI** clarifying that `test` only logs a message.
  - Validation: Run `node src/input.js test` → observe `Running tests...` and confirm there is no test runner configured.

- Missing: Architecture / Module overview
  - Added section: **Project structure (short)** describing flow `input.js -> taskRunner.js -> tasks.js`.
  - Validation: Open `src/input.js` and trace the `require` calls to confirm the described flow.

How a new developer can now proceed:
1. Ensure Node.js is installed.
2. Run `node src/input.js build` or `node src/input.js test` to verify functionality.
3. Read `README.md` for the known `npm start` mismatch and suggested fixes.

Status: All identified documentation gaps have matching entries in `README.md` and are validated by the checklist above.
