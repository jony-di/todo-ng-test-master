export default class ToDoModel {
  public Title: string;
  public IsCompleted: boolean;
    constructor(title: string) {
      this.Title = title;
      this.IsCompleted = false;
    }
}
