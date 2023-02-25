import { BaseAlarme } from "./base-alarme";

/**
 * @class Alert
 * @summary Dispara uma notificação de alarme.
 */
export class Alert extends BaseAlarme {
  private color: number | string;

  constructor(color: number | string) {
    super();
    this.color = color;
  }

  /**
   * @summary Return Color Number or RGB
   * @returns {number|string}
   */
  public getColor(): number | string {
    return this.color;
  }
}
