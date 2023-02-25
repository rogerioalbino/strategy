/**
 * @class BaseAlarme
 * @summary Class Base
 */
export class BaseAlarme {
  protected name: string = this.constructor.name;

  constructor() {}

  /**
   * @summary Return Name
   * @returns {string}
   */
  public getName(): string {
    return this.name;
  }
}
