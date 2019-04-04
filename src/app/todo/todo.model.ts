export class Todo {
  constructor(
    public id: number,
    public username: string,
    public name: string,
    public description: string,
    public isPending: boolean,
    public isDoing: boolean,
    public isDone: boolean
  ) {}
}
