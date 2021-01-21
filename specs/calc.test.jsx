import React from "react";
import { mount, shallow } from "enzyme";
import {
  calculatePercentDown,
  calculateAmountDown,
} from "../client/src/utils/calculator";

describe("Calculator", () => {
  describe("calculatePercentDown", () => {
    it("Returns the percentage down..", () => {
      const result = calculatePercentDown(1000000, 200000);
      expect(result).toBe(.2);
    });
  });

  describe("calculateAmountDown", () => {
    it("Return the dollar amount down..", () => {
      const result = calculateAmountDown(1000000, 20);
      expect(result).toBe(20000000);
    });
  });
});
