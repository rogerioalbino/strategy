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
   * @summary Return Name
   * @returns {string}
   */
  public getName(): string {
    return this.name;
  }

  /**
   * @summary Return Condition or Undefined
   * @param {number} index
   * @returns {Condition|undefined}
   */
  public getCondition(index: number): Condition | undefined {
    return this.conditions.at(index);
  }

  /**
   * @summary Return Conditions
   * @returns {Array<Condition>}
   */
  public getConditions(): Array<Condition> {
    return this.conditions;
  }

  /**
   * @summary Add Condition
   * @param {Condition} condition
   * @returns {void}
   */
  public setCondition(condition: Condition): void {
    this.conditions.push(condition);
  }

  /**
   * @summary Remove Condition
   * @param {number} index
   * @returns {void}
   */
  public removeCondition(index: number): void {
    this.conditions.splice(index, 1);
  }
}
