import { Price, Quantity } from '../types/types';
import { BaseBackTesting } from './base-back-testing';

/**
 * @class SellShortLimit
 * @summary Envia ordem de venda do tipo limite.
 */
export class SellShortLimit extends BaseBackTesting {
  private readonly price: Price | undefined;
  private readonly quantity: Quantity | undefined;

  constructor(price?: number, quantity?: number) {
    super();
    this.price = price;
    this.quantity = quantity;
  }

  public getPrice(): Price | undefined {
    return this.price;
  }

  public getQuantity(): Quantity | undefined {
    return this.quantity;
  }
}
