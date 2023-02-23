export class CalcTime {
  protected type: string = this.constructor.name;

  private readonly timeReference: number;
  private readonly displacementMinute: number;

  constructor(timeReference: number, displacementMinute: number) {
    this.timeReference = timeReference;
    this.displacementMinute = displacementMinute;
  }

  public getType(): string {
    return this.type;
  }

  public getTimeReference(): number {
    return this.timeReference;
  }

  public getDisplacementMinute(): number {
    return this.displacementMinute;
  }
}
