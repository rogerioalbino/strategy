import { BaseBackTesting } from './base-back-testing';

/**
 * @class SellToCoverAtMarket
 * @summary Realiza uma ordem de venda à mercado caso exista uma posição de compra.
 */
export class SellToCoverAtMarket extends BaseBackTesting {
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
