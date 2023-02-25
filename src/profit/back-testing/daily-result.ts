import { BaseBackTesting } from "./base-back-testing";

/**
 * @class DailyResult
 * @summary Retorna o resultado diário
 */
export class DailyResult extends BaseBackTesting {
  private readonly openResult: boolean | undefined;

  constructor(openResult?: boolean) {
    super();
    this.openResult = openResult;
  }

  /**
   * @summary Return OpenReault or Undefined
   * @returns {number | undefined}
   */
  public getOpenResult(): boolean | undefined {
    return this.openResult;
  }
}
