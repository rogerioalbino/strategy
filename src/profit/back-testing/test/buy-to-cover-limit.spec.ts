import { describe, expect, it } from 'vitest';

import { Price, Quantity, Entry } from "../../types";
import { BuyToCoverLimit } from "../buy-to-cover-limit";

describe('BuyToCoverLimit', () => {
  it.only('getPrice', () => {
    // Arrange
    const buyToCoverLimit: Entry = new BuyToCoverLimit(5.5);
    // Act
    const received = buyToCoverLimit.getPrice();
    const expected: Price = 5.5;
    // Assert
    expect(received).equals(expected);
  });

  it.todo('getQuantity', () => {
    // Arrange
    const buyAtMarket: Entry = new BuyToCoverLimit(5);
    // Act
    const received = buyAtMarket.getQuantity();
    const expected: Quantity = 5;
    // Assert
    expect(received).equals(expected);
  });
});
