export class Bartype {
  protected type: string = this.constructor.name;

  constructor() {}

  public getType(): string {
    return this.type;
  }
}
