import { BaseBackTesting } from './base-back-testing';

/**
 * @class BuyAtMarket
 * @summary Realiza envio de ordem de compra à mercado.
 */
export class BuyAtMarket extends BaseBackTesting {
  private readonly quantity: number | undefined;

  constructor(quantity?: number) {
    super();
    this.quantity = quantity;
  }

  /**
   * @summary Return Quantity or Undefined
   * @returns {number | undefined}
   */
  public getQuantity(): number | undefined {
    return this.quantity;
  }
}
