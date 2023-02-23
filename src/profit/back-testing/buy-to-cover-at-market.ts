import { BaseBackTesting } from './base-back-testing';

/**
 * @class BuyToCoverAtMarket
 * @summary Realiza o fechamento de uma operação de venda.
 */
export class BuyToCoverAtMarket extends BaseBackTesting {
  private readonly quantity: number | undefined;

  constructor(quantity?: number) {
    super();
    this.quantity = quantity;
  }

  public getQuantity(): number | undefined {
    return this.quantity;
  }
}
