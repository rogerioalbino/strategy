import { Price, Quantity } from "../types/types";
import { BaseBackTesting } from "./base-back-testing";

/**
 * @class SellShortLimit
 * @summary Envia ordem de venda do tipo limite.
 */
export class SellShortLimit extends BaseBackTesting {
  private readonly price: Price;
  private readonly quantity: Quantity | undefined;

  constructor(price: number, quantity?: number) {
    super();
    this.price = price;
    this.quantity = quantity;
  }

  /**
   * @summary Return Price
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
