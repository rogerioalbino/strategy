import { describe, expect, it } from 'vitest';

import { BaseBackTesting } from '../base-back-testing';
import { RSI } from '../../indicator';

describe('BaseBackTesting', () => {
  it('getName', () => {
    // Arrange
    const baseBackTesting: BaseBackTesting = new BaseBackTesting();
    // Act
    const received = baseBackTesting.getName();
    const expected = 'BaseBackTesting';
    // Assert
    expect(received).equals(expected);
  });

  it('getCondition', () => {
    // Arrange
    const baseBackTesting: BaseBackTesting = new BaseBackTesting();
    // Act
    baseBackTesting.setCondition(new RSI());
    const index = 0;
    const received = baseBackTesting.getCondition(index);
    const expected = { name: 'RSI' };
    // Assert
    expect(JSON.stringify(received)).equals(JSON.stringify(expected));
  });

  it('getConditions', () => {
    // Arrange
    const baseBackTesting: BaseBackTesting = new BaseBackTesting();
    // Act
    baseBackTesting.setCondition(new RSI());
    const received = baseBackTesting.getConditions();
    const expected = [{ name: 'RSI' }];
    // Assert
    expect(JSON.stringify(received)).equals(JSON.stringify(expected));
  });

  it('setCondition', () => {
    // Arrange
    const baseBackTesting: BaseBackTesting = new BaseBackTesting();
    // Act
    baseBackTesting.setCondition(new RSI());
    const index = 0;
    const received = baseBackTesting.getCondition(index);
    const expected = { name: 'RSI' };
    // Assert
    expect(JSON.stringify(received)).equals(JSON.stringify(expected));
  });

  it('removeCondition', () => {
    // Arrange
    const baseBackTesting: BaseBackTesting = new BaseBackTesting();
    // Act
    baseBackTesting.setCondition(new RSI());
    const index = 0;
    baseBackTesting.removeCondition(index);
    const received = baseBackTesting.getConditions();
    const expected = [];
    // Assert
    expect(JSON.stringify(received)).equals(JSON.stringify(expected));
  });
});
