# Orbit Ops Report Plane Walkthrough

The fixture is intentionally compact, so the review starts with the cases that pull farthest apart.

| Case | Focus | Score | Lane |
| --- | --- | ---: | --- |
| baseline | dry-run spread | 159 | ship |
| stress | rename risk | 127 | watch |
| edge | operator cost | 197 | ship |
| recovery | idempotence | 135 | watch |
| stale | dry-run spread | 267 | ship |

Start with `stale` and `stress`. They create the widest contrast in this repository's fixture set, which makes them better review anchors than the middle cases.

The next useful expansion would be a malformed fixture around rename risk and idempotence.
