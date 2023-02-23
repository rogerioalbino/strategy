import { BaseBackTesting } from './base-back-testing';

/**
 * @class SendOrder
 * @summary Envia uma ordem customizada.
 */
export class SendOrder extends BaseBackTesting {
  private readonly side: number | undefined;
  private readonly entry: number | undefined;
  private readonly quantity: number | undefined;
  private readonly limit: number | undefined;
  private readonly stop: number | undefined;

  constructor(side: number, entry: number, quantity: number, limit: number, stop: number) {
    super();
    this.side = side;
    this.entry = entry;
    this.quantity = quantity;
    this.limit = limit;
    this.stop = stop;
  }

  public getSide(): number | undefined {
    return this.side;
  }

  public getEntry(): number | undefined {
    return this.entry;
  }

  public getQuantity(): number | undefined {
    return this.quantity;
  }

  public getLimit(): number | undefined {
    return this.limit;
  }

  public getStop(): number | undefined {
    return this.stop;
  }
}
