import { describe, expect, it } from 'vitest';

import { Alert } from '../alert';
import { Alarme } from '../../types';

describe('Alert', () => {
    it('getColor', () => {
        // Arrange
        const color: string = 'clRed';
        const alert: Alarme = new Alert(color);
        // Act
        const received: number | string = alert.getColor();
        const expected: string = 'clRed';
        // Assert
        expect(received).equals(expected);
    });
});
