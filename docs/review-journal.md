# Review Journal

The cases below are the review handles I would use before changing the implementation.

The local checks classify each case as `ship`, `watch`, or `hold`. That gives the project a small review vocabulary that matches its automation focus without claiming live deployment or external usage.

## Cases

- `baseline`: `dry-run spread`, score 159, lane `ship`
- `stress`: `rename risk`, score 127, lane `watch`
- `edge`: `operator cost`, score 197, lane `ship`
- `recovery`: `idempotence`, score 135, lane `watch`
- `stale`: `dry-run spread`, score 267, lane `ship`

## Note

The useful failure mode here is a wrong decision on a named case, not a vague style disagreement.
