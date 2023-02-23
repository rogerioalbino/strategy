import { BaseAlarme } from "./base-alarme";

export class Alert extends BaseAlarme {
  private color: number;

  constructor(color: number) {
    super();
    this.color = color;
  }

  public getColor(): number {
    return this.color;
  }
}
