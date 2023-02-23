import { Price, Quantity } from '../types/types';
import { BaseBackTesting } from './base-back-testing';

/**
 * @class SellToCoverLimit
 * @summary Envia uma ordem de venda limite para fechar a operação.
 */
export class SellToCoverLimit extends BaseBackTesting {
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