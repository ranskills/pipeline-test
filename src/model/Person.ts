export class Person {
  constructor(protected firstName: string, protected lastName: string) {}

  public get name(): string {
    return `${this.firstName} ${this.lastName}`.trim();
  }
}
