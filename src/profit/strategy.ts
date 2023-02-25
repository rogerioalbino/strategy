import { Entry, Exit } from "./types";

export class Strategy {
  private name: string;
  private entries: Array<Entry>;
  private exits: Array<Exit>;

  constructor(name: string) {
    this.name = name;
    this.entries = new Array();
    this.exits = new Array();
  }

  public getName(): string {
    return this.name;
  }

  public setEntry(entry: Entry): void {
    this.entries.push(entry);
  }

  public getEntries(): Array<Entry> {
    return this.entries;
  }

  public removeEntry(index: number): void {
    this.entries.splice(index, 1);
  }

  public getExits(): Array<Exit> {
    return this.exits;
  }

  public setExit(exit: Exit): void {
    this.exits.push(exit);
  }

  public removeExit(index: number): void {
    this.exits.splice(index, 1);
  }
}
