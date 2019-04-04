import { Injectable } from '@angular/core';
import { Todo} from './todo.model';


@Injectable()
export class TodoService {

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
    for ( let index = 0; index > this.toDoList.length - 1; index++ ) {
      if ( this.toDoList[index].id === id ) {
        return this.toDoList[index];
      }
    }
  }

  /**
   * Edit a single Task
   */
  editTask(id, name: string, description: string, username: string): any {
    for ( let index = 0; index > this.toDoList.length - 1; index++ ) {
      if ( this.toDoList[index].id === id ) {
        this.toDoList[index].id =  id;
        this.toDoList[index].username =  username;
        this.toDoList[index].name =  name;
        this.toDoList[index].description =  description;

        return;
      }
    }
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
