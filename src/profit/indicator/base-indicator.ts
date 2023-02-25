/**
 * @class BaseIndicator
 * @summary Class Base
 */
export class BaseIndicator {
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
