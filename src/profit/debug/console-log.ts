export class ConsoleLog {
  protected type: string = this.constructor.name;
  private readonly content: string;
  private readonly color: number;

  constructor(content: string, color: number) {
    this.content = content;
    this.color = color;
  }

  public getType(): string {
    return this.type;
  }

  public getContent(): string {
    return this.content;
  }

  public getColor(): number {
    return this.color;
  }
}
