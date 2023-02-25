import { BaseBackTesting } from "./base-back-testing";

/**
 * @class SellShortStop
 * @summary Abre uma posição de venda enviando uma ordem do tipo Stop.
 */
export class SellShortStop extends BaseBackTesting {
  private readonly stop: number | undefined;
  private readonly limit: number | undefined;
  private readonly quantity: number | undefined;

  constructor(stop?: number, limit?: number, quantity?: number) {
    super();
    this.stop = stop;
    this.limit = limit;
    this.quantity = quantity;
  }

  /**
   * @summary Return Stop or Undefined
   * @returns {number | undefined}
   */
  public getStop(): number | undefined {
    return this.stop;
  }
  /**
   * @summary Return Limit or Undefined
   * @returns {number | undefined}
   */
  public getLimit(): number | undefined {
    return this.limit;
  }

  /**
   * @summary Return Quantity or Undefined
   * @returns {number | undefined}
   */
  public getQuantity(): number | undefined {
    return this.quantity;
  }
}
