import { Price, Quantity } from "../types/types";
import { BaseBackTesting } from "./base-back-testing";

/**
 * @class BuyLimit
 * @summary Realiza envio de uma ordem limite de compra.
 */
export class BuyLimit extends BaseBackTesting {
  private readonly price: Price;
  private readonly quantity: Quantity | undefined;

  constructor(price: number, quantity?: number) {
    super();
    this.price = price;
    this.quantity = quantity;
  }

  /**
   * @summary Return Prece
   * @returns {number}
   */
  public getPrice(): Price {
    return this.price;
  }

  /**
   * @summary Return Quantity or Undefined
   * @returns {number | undefined}
   */
  public getQuantity(): Quantity | undefined {
    return this.quantity;
  }
}
