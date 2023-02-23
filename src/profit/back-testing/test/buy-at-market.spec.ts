import { describe, expect, it } from 'vitest';

import { BuyAtMarket } from '../buy-at-market';
import { Entry } from '../../types';

describe('BuyAtMarket', () => {
  it('getQuantity', () => {
    // Arrange
    const buyAtMarket: Entry = new BuyAtMarket(5);
    // Act
    const received = buyAtMarket.getQuantity();
    const expected = 5;
    // Assert
    expect(received).equals(expected);
  });
});
