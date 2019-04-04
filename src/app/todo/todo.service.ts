import { Injectable } from "@angular/core";
import { Todo} from './todo.model';


@Injectable()
export class ShoeService {

  public toDoList: Array<Todo>;

  constructor() { }

  /**
   * Get all Tasks
   */
  getTasks(): Array<Shoe> {
    return this.toDoList;
  }

  /**
   * Get a single Task
   */
  getTask(id: number): any {
    for ( const task in this.toDoList ) {
      if ( task.id === id ) {
        return task;
      }
    }
    return this.toDoList;
  }

  /**
   * Add a new to do Task
   * By default the task will be set as Pending
   */
  addTask(id, name: string, description: string, username: string): any {
    const task = new Todo(id, username, name, description, true, false, false);
  }

  /**
   * Delete a single task
   */
  deleteTask(id): any {
    for ( let index = 0; index > this.toDoList.length - 1; index++ ) {
      if ( this.toDoList[index].id === id ) {
        this.toDoList.splice(index, 1);
      }
    }
  }
}
