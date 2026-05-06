# orbit-ops-report-plane

`orbit-ops-report-plane` is a JavaScript project in automation. Its focus is to develop a JavaScript command-oriented project for report scenarios with bounded scenario files, conflict explanations, and bounded memory input sets.

## Reason For The Project

The point is to make a small domain rule concrete enough that a reader can change it and immediately see what broke.

## Orbit Ops Report Plane Review Notes

`stale` and `stress` are the cases worth reading first. They show the optimistic and cautious ends of the fixture.

## What It Does

- `fixtures/domain_review.csv` adds cases for dry-run spread and rename risk.
- `metadata/domain-review.json` records the same cases in structured form.
- `config/review-profile.json` captures the read order and the two review questions.
- `examples/orbit-ops-report-walkthrough.md` walks through the case spread.
- The JavaScript code includes a review path for `dry-run spread` and `rename risk`.
- `docs/field-notes.md` explains the strongest and weakest cases.

## How It Is Put Together

The implementation keeps the scoring rule plain: reward signal and confidence, preserve slack, penalize drag, then classify the result into a review lane.

The added JavaScript path is deliberately direct, with fixtures doing most of the explaining.

## Run It

```powershell
powershell -NoProfile -ExecutionPolicy Bypass -File scripts/verify.ps1
```

## Check It

The same command runs the local verification path. The highest-scoring domain case is `stale` at 267, which lands in `ship`. The most cautious case is `stress` at 127, which lands in `watch`.

## Boundaries

The fixture set is small enough to audit by hand. The next useful expansion is malformed input coverage, not extra surface area.
