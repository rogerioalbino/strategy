import { BaseBackTesting } from './base-back-testing';

/**
 * @class SellShortAtMarket
 * @summary Envia ordem de venda à mercado para abrir posição.
 */
export class SellShortAtMarket extends BaseBackTesting {
  private readonly quantity: number | undefined;

  constructor(quantity?: number) {
    super();
    this.quantity = quantity;
  }

  public getQuantity(): number | undefined {
    return this.quantity;
  }
}
