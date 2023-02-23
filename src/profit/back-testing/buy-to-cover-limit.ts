import { Price, Quantity } from "../types/types";
import { BaseBackTesting } from "./base-back-testing";

/**
 * @class BuyToCoverLimit
 * @summary Envia uma ordem de compra limite para fechar a operação.
 */
export class BuyToCoverLimit extends BaseBackTesting {
  private readonly price: Price;
  private readonly quantity: Quantity | undefined;

  constructor(price: number, quantity?: number) {
    super();
    this.price = price;
    this.quantity = quantity;
  }

  public getPrice(): Price {
    return this.price;
  }

  public getQuantity(): Quantity | undefined {
    return this.quantity;
  }
}
