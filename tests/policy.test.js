import assert from "node:assert/strict";
import { classify, score } from "../src/policy.js";

const cases = [
  {
    "name": "case_1",
    "demand": 90,
    "capacity": 90,
    "latency": 21,
    "risk": 6,
    "weight": 11,
    "score": 208,
    "decision": "accept"
  },
  {
    "name": "case_2",
    "demand": 60,
    "capacity": 76,
    "latency": 17,
    "risk": 22,
    "weight": 12,
    "score": 32,
    "decision": "review"
  },
  {
    "name": "case_3",
    "demand": 77,
    "capacity": 86,
    "latency": 14,
    "risk": 23,
    "weight": 10,
    "score": 71,
    "decision": "review"
  }
];

for (const item of cases) {
  const signal = {
    demand: item.demand,
    capacity: item.capacity,
    latency: item.latency,
    risk: item.risk,
    weight: item.weight
  };
  assert.equal(score(signal), item.score);
  assert.equal(classify(signal), item.decision);
}
