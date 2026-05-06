# orbit-ops-report-plane

`orbit-ops-report-plane` is a JavaScript project for Automation. It turns develop a JavaScript command-oriented project for report scenarios with bounded scenario files, conflict explanations, and bounded memory input sets into a small local model with readable fixtures and a direct verification command.

## Reading Orbit Ops Report Plane

Start with the README, then open `metadata/project.json` to check the constants behind the examples. After that, `fixtures/cases.csv` shows the compact path and `examples/extended_cases.csv` gives a wider look at the same rule.

## Purpose

The goal is to capture the core behavior in code and make the surrounding assumptions obvious. A reader should be able to run the verifier, open the fixtures, and understand why each decision was made.

## Fixture Notes

`degraded` is the first example I would inspect because it lands on the `review` path with a score of -19. The broader file also keeps `degraded` at -19 and `surge` at 193, which gives the model a useful low-to-high spread.

## Design Sketch

The core is a scoring model over demand, capacity, latency, risk, and weight. That keeps dry-run output, file plans, and safety rails in one explicit decision path. The threshold is 157, with risk penalty 7, latency penalty 2, and weight bonus 2. The JavaScript version uses native modules and a small Node test path.

## What It Does

- Models dry-run output with deterministic scoring and explicit review decisions.
- Uses fixture data to keep file plans changes visible in code review.
- Includes extended examples for safety rails, including `surge` and `degraded`.
- Documents idempotent checks tradeoffs in `docs/operations.md`.
- Runs locally with a single verification command and no external credentials.

## Usage

```powershell
powershell -NoProfile -ExecutionPolicy Bypass -File scripts/verify.ps1
```

This runs the language-level build or test path against the compact fixture set.

## Verification

```powershell
powershell -NoProfile -ExecutionPolicy Bypass -File scripts/audit.ps1
```

The audit command checks repository structure and README constraints before it delegates to the verifier.

## Files Worth Reading

- `src`: primary implementation
- `tests`: verification harness
- `fixtures`: compact golden scenarios
- `examples`: expanded scenario set
- `metadata`: project constants and verification metadata
- `docs`: operations and extension notes
- `scripts`: local verification and audit commands
- `package.json`: Node package scripts

## Next Directions

- Add malformed input fixtures so the failure path is as visible as the happy path.
- Split the scoring constants into a typed configuration object and validate it before use.
- Add a comparison mode that shows how decisions change when one signal is adjusted.
- Add one more automation fixture that focuses on a malformed or borderline input.

## Limits

The scoring model is simple by design. More domain-specific behavior should be added through explicit adapters or extra fixture classes rather than hidden constants.

## Setup

Clone the repository, enter the directory, and run the verifier. No database server, cloud account, or token is required.
