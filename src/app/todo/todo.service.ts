import { Injectable } from '@angular/core';
import { Todo} from './todo.model';


@Injectable()
export class TodoService {

  public toDoList: Array<Todo> = [
    new Todo(1,
      'richardbrito',
      'Do Something',
      'Some quick example text to build on the card title and make up the bulk of the card\'s content.',
      true,
      false,
      false),
    new Todo(2,
      'richardbrito',
      'Do Something',
      'Some quick example text to build on the card title and make up the bulk of the card\'s content.',
      true,
      false,
      false),
    new Todo(3,
      'richardbrito',
      'Do Something',
      'Some quick example text to build on the card title and make up the bulk of the card\'s content.',
      false,
      true,
      false),
    new Todo(4,
      'richardbrito',
      'Do Something',
      'Some quick example text to build on the card title and make up the bulk of the card\'s content.',
      false,
      true,
      false),
    new Todo(5,
      'richardbrito',
      'Do Something',
      'Some quick example text to build on the card title and make up the bulk of the card\'s content.',
      false,
      false,
      true),
    new Todo(6,
      'richardbrito',
      'Do Something',
      'Some quick example text to build on the card title and make up the bulk of the card\'s content.',
      false,
      false,
      true),
    new Todo(7,
      'richardbrito',
      'Do Something',
      'Some quick example text to build on the card title and make up the bulk of the card\'s content.',
      true,
      false,
      false),
    new Todo(8,
      'richardbrito',
      'Do Something',
      'Some quick example text to build on the card title and make up the bulk of the card\'s content.',
      true,
      false,
      false),
    new Todo(9,
      'richardbrito',
      'Do Something',
      'Some quick example text to build on the card title and make up the bulk of the card\'s content.',
      false,
      true,
      false),
    new Todo(10,
      'richardbrito',
      'Do Something',
      'Some quick example text to build on the card title and make up the bulk of the card\'s content.',
      false,
      true,
      false),
    new Todo(11,
      'richardbrito',
      'Do Something',
      'Some quick example text to build on the card title and make up the bulk of the card\'s content.',
      false,
      false,
      true),
    new Todo(12,
      'richardbrito',
      'Do Something',
      'Some quick example text to build on the card title and make up the bulk of the card\'s content.',
      false,
      false,
      true),
    ];

  constructor() { }

  /**
   * Get all Tasks
   */
  getTasks(): Array<Todo> {
    return this.toDoList;
  }

  /**
   * Get a single Task
   */
  getTask(id: number): any {
    for ( let index = 0; index < this.toDoList.length - 1; index++ ) {
      console.log(index);
      if ( this.toDoList[index].id === id ) {
        return this.toDoList[index];
      }
    }
  }

  /**
   * Edit a single Task
   */
  editTask(id, name: string, description: string, username: string): any {
    for ( let index = 0; index < this.toDoList.length - 1; index++ ) {
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
    this.toDoList.push(task);
  }

  /**
   * Delete a single task
   */
  deleteTask(id): any {
    for ( let index = 0; index < this.toDoList.length - 1; index++ ) {
      if ( this.toDoList[index].id === id ) {
        this.toDoList.splice(index, 1);
      }
    }
  }
}
