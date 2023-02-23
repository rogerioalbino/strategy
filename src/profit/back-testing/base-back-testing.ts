import { Condition } from '../types';

/**
 * @class BaseBackTesting
 * @summary Retorna o tipo da estrategia
 */
export class BaseBackTesting {
  protected name: string = this.constructor.name;
  private readonly conditions: Array<Condition>;

  constructor() {
    this.conditions = new Array();
  }

  /**
   * @summary Retorna o tipo da estrategia
   * @returns {string}
   */
  public getName(): string {
    return this.name;
  }

  /**
   * @summary Retorna indicador pelo indice
   * @param {number} index
   * @returns {Condition|undefined}
   */
  public getCondition(index: number): Condition | undefined {
    return this.conditions.at(index);
  }

  /**
   * @summary Retorna lista de indicadores
   * @returns {Array<Condition>}
   */
  public getConditions(): Array<Condition> {
    return this.conditions;
  }

  /**
   * @summary Adiciona indicador a lista
   * @param {Condition} condition
   * @returns {void}
   */
  public setCondition(condition: Condition): void {
    this.conditions.push(condition);
  }

  /**
   * @summary Remove indicador da lista
   * @param {number} index
   * @returns {void}
   */
  public removeCondition(index: number): void {
    this.conditions.splice(index, 1);
  }
}
