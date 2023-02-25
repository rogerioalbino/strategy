import { BaseBackTesting } from "./base-back-testing";

/**
 * @class BuyToCoverStop
 * @summary Realiza o envio de ordem de compra stop para fechar posição.
 */
export class BuyToCoverStop extends BaseBackTesting {
  private readonly stop: number;
  private readonly limit: number;
  private readonly quantity: number | undefined;

  constructor(stop: number, limit: number, quantity?: number) {
    super();
    this.stop = stop;
    this.limit = limit;
    this.quantity = quantity;
  }

  /**
   * @summary Return Stop
   * @returns {number}
   */
  public getStop(): number {
    return this.stop;
  }

  /**
   * @summary Return Limit
   * @returns {number}
   */
  public getLimit(): number {
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
