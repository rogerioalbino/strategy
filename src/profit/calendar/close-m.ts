export class CloseM {
  protected type: string = this.constructor.name;

  private readonly quantityPreviousMonths: number;

  constructor(quantityPreviousMonths: number) {
    this.quantityPreviousMonths = quantityPreviousMonths;
  }

  public getType(): string {
    return this.type;
  }

  public getQuantityPreviousMonths(): number {
    return this.quantityPreviousMonths;
  }
}
