export class BaseAlarme {
    protected name: string = this.constructor.name;

    constructor() { }

    public getName(): string {
        return this.name;
    }
}