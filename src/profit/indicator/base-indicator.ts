/**
 * @class BaseIndicator
 * @summary Retorna o tipo do indicador
 */
export class BaseIndicator {
  protected name: string = this.constructor.name;

  constructor() {}

  /**
   * @summary Retorna o tipo da estrategia
   * @returns {string}
   */
  public getName(): string {
    return this.name;
  }
}
