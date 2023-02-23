import { describe, expect, it } from 'vitest';

import { Alert } from '../alert';
import { Alarme } from '../../types';

describe('Alert', () => {
    it('getColor', () => {
        // Arrange
        const color: number = 3;
        const alert: Alarme = new Alert(color);
        // Act
        const received: number = alert.getColor();
        const expected: number = 3;
        // Assert
        expect(received).equals(expected);
    });
});
