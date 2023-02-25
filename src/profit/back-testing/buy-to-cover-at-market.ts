import { BaseBackTesting } from "./base-back-testing";

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

  /**
   * @summary Return Quantity or Undefined
   * @returns {number | undefined}
   */
  public getQuantity(): number | undefined {
    return this.quantity;
  }
}
