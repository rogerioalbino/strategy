import { BaseBackTesting } from './base-back-testing';

/**
 * @class DailyResult
 * @summary Retorna o resultado diário
 */
export class DailyResult extends BaseBackTesting {
  private readonly openResult: boolean;

  constructor(openResult: boolean = true) {
    super();
    this.openResult = openResult;
  }

  public getOpenResult(): boolean {
    return this.openResult;
  }
}
