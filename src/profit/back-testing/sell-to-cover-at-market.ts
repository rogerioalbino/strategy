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

  public getQuantity(): number | undefined {
    return this.quantity;
  }
}
