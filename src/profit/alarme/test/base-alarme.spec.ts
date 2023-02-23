import { describe, expect, it } from 'vitest';

import { BaseAlarme } from '../base-alarme';

describe.only('BaseAlarme', () => {
    it('getName', () => {
        // Arrange
        const baseAlarme: BaseAlarme = new BaseAlarme(); 
        // Act
        const received: string = baseAlarme.getName();
        const expected: string = "BaseAlarme";
        // Assert
        expect(received).equals(expected);
    });
});
