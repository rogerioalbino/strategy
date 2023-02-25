import { describe, expect, it } from "vitest";

import { Entry } from "../types";
import { Strategy } from "../strategy";

import { RSI } from "../indicator";
import { BuyAtMarket } from "../back-testing";

describe.only("Strategy", () => {
  it("setEntry", () => {
    // Arrange
    const strategy: Strategy = new Strategy("max and min");
    const buyLimit: Entry = new BuyAtMarket();
    buyLimit.setCondition(new RSI());
    // Act
    strategy.setEntry(buyLimit);
    const received = JSON.stringify(strategy);
    const expected = JSON.stringify({
      name: "max and min",
      entries: [{ name: "BuyAtMarket", conditions: [{ name: "RSI" }] }],
      exits: [],
    });
    // Assert
    expect(received).equals(expected);
  });

  it.todo("getEntries", () => {
    // Arrange
    // Act
    // Assert
  });

  it.todo("removeEntry", () => {
    // Arrange
    // Act
    // Assert
  });

  it.todo("setExit", () => {
    // Arrange
    // Act
    // Assert
  });

  it.todo("getExits", () => {
    // Arrange
    // Act
    // Assert
  });

  it.todo("removeExit", () => {
    // Arrange
    // Act
    // Assert
  });

  it("export strategy", () => {
    const strategy: Strategy = new Strategy("max and min");
    const buyLimit: Entry = new BuyAtMarket();
    buyLimit.setCondition(new RSI());
    strategy.setEntry(buyLimit);
    const entries = strategy.getEntries();
    entries.forEach((entry) => {
      const nameStrategy = entry.getName();
      const conditions = entry.getConditions();
      conditions.forEach((condition) => {
        const nameIndicator = condition["name"];
        console.log(
          `begin \n\t if(${nameIndicator}) then \n\t begin \n\t\t ${nameStrategy}; \n\t end \n end`
        );
      });
    });
  });
});
