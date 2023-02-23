import { describe, expect, it } from "vitest";

import { Price, Entry } from "../../types";
import { BuyToCoverLimit } from "../buy-to-cover-limit";

describe("BuyToCoverLimit", () => {
  it("getPrice", () => {
    // Arrange
    const buyToCoverLimit: Entry = new BuyToCoverLimit(5.5);
    // Act
    const received = buyToCoverLimit.getPrice();
    const expected: Price = 5.5;
    // Assert
    expect(received).equals(expected);
  });

  it("getQuantity", () => {
    // Arrange
    const buyToCoverLimit: Entry = new BuyToCoverLimit(5.5, 5);
    // Act
    const received: number | undefined = buyToCoverLimit.getQuantity();
    const expected: number = 5;
    // Assert
    expect(received).equals(expected);
  });
});
