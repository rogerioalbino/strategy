import { Entry, Exit } from './types';

export class Strategy {
  private entries: Array<Entry>;
  private exits: Array<Exit>;

  constructor() {
    this.entries = new Array();
    this.exits = new Array();
  }

  getEntries(): Array<Entry> {
    return this.entries;
  }

  setEntry(entry: Entry): void {
    this.entries.push(entry);
  }

  removeEntry(index: number): void {
    this.entries.splice(index, 1);
  }

  getExits(): Array<Exit> {
    return this.exits;
  }

  setExit(exit: Exit): void {
    this.exits.push(exit);
  }

  removeExit(index: number): void {
    this.exits.splice(index, 1);
  }
}
