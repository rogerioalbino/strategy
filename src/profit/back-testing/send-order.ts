import { BaseBackTesting } from "./base-back-testing";

/**
 * @class SendOrder
 * @summary Envia uma ordem customizada.
 */
export class SendOrder extends BaseBackTesting {
  private readonly side: number;
  private readonly entry: number;
  private readonly quantity: number;
  private readonly limit: number;
  private readonly stop: number;

  constructor(side: number, entry: number, quantity: number, limit: number, stop: number) {
    super();
    this.side = side;
    this.entry = entry;
    this.quantity = quantity;
    this.limit = limit;
    this.stop = stop;
  }

  /**
   * @summary Return Side
   * @returns {number}
   */
  public getSide(): number {
    return this.side;
  }

  /**
   * @summary Return Entry
   * @returns {number}
   */
  public getEntry(): number {
    return this.entry;
  }

  /**
   * @summary Return Quantity
   * @returns {number}
   */
  public getQuantity(): number {
    return this.quantity;
  }

  /**
   * @summary Return Limit
   * @returns {number}
   */
  public getLimit(): number {
    return this.limit;
  }

  /**
   * @summary Return Stop
   * @returns {number}
   */
  public getStop(): number {
    return this.stop;
  }
}
