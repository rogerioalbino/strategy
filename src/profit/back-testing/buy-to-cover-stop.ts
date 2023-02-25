import { BaseBackTesting } from './base-back-testing';

/**
 * @class BuyToCoverStop
 * @summary Realiza o envio de ordem de compra stop para fechar posição.
 */
export class BuyToCoverStop extends BaseBackTesting {
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
