export class CloseD {
  protected type: string = this.constructor.name;

  private readonly quantityPreviousDays: number;

  constructor(quantityPreviousDays: number) {
    this.quantityPreviousDays = quantityPreviousDays;
  }

  public getType(): string {
    return this.type;
  }

  public getQuantityPreviousDays(): number {
    return this.quantityPreviousDays;
  }
}
