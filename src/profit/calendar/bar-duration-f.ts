export class BarDurationF {
  protected type: string = this.constructor.name;

  constructor() {}

  public getType(): string {
    return this.type;
  }
}
