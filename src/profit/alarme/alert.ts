export class Alert {
  protected type: string = this.constructor.name;
  private color: number;

  constructor(color: number) {
    this.color = color;
  }

  public getColor(): number {
    return this.color;
  }
}
