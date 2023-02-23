export class CalcDate {
  protected type: string = this.constructor.name;

  private readonly dataReference: number;
  private readonly displacementDays: number;

  constructor(dataReference: number, displacementDays: number) {
    this.dataReference = dataReference; 
    this.displacementDays = displacementDays;
  }

  public getType(): string {
    return this.type;
  }

  public getDataReference(): number {
    return this.dataReference;
  }

  public getDisplacementDays(): number {
    return this.displacementDays;
  }
}
