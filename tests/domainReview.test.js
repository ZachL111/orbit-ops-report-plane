import assert from "node:assert/strict";
import { domainReviewLane, domainReviewScore } from "../src/domainReview.js";

const item = { signal: 67, slack: 25, drag: 22, confidence: 66 };
assert.equal(domainReviewScore(item), 159);
assert.equal(domainReviewLane(item), "ship");
