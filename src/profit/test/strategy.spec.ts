import { describe, expect, it } from 'vitest';

import { Strategy } from '../strategy';
import { BuyAtMarket } from '../back-testing';

import { RSI } from '../indicator';
import { Entry } from '../types';

describe('Strategy', () => {
  it('setEntry', () => {
    // Arrange
    const buyLimit: Entry = new BuyAtMarket();
    buyLimit.setCondition(new RSI());
    const strategy: Strategy = new Strategy();
    // Act
    strategy.setEntry(buyLimit);
    const received = JSON.stringify(strategy);
    const expected = JSON.stringify({
      entries: [{ name: 'BuyAtMarket', conditions: [{ name: 'RSI' }] }],
      exits: [],
    });
    // Assert
    expect(received).equals(expected);
  });

  it.todo('getEntries', () => {
    // Arrange
    // Act
    // Assert
  });

  it.todo('removeEntry', () => {
    // Arrange
    // Act
    // Assert
  });

  it.todo('setExit', () => {
    // Arrange
    // Act
    // Assert
  });

  it.todo('getExits', () => {
    // Arrange
    // Act
    // Assert
  });

  it.todo('removeExit', () => {
    // Arrange
    // Act
    // Assert
  });
});
