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
    console.log(this.toDoList);
    for ( let index = 0; index < this.toDoList.length; index++ ) {
      // console.log(this.toDoList[index].id);
      if ( this.toDoList[index].id === id ) {
        return this.toDoList[index];
      }
    }
  }

  /**
   * Edit a single Task
   */
  editTask(username: string, id: number, name: string, description: string, {status: number = null} = {}): any {
    for ( let index = 0; index < this.toDoList.length; index++ ) {
      // console.log(this.toDoList[index].id);
      if ( this.toDoList[index].id === id ) {
        this.toDoList[index].username =  username;
        this.toDoList[index].name =  name;
        this.toDoList[index].description =  description;
      }
    }
  }

  /**
   *  Change the status of a task
   */
  changeTaskStatus(id: number, status) {
    for ( let index = 0; index < this.toDoList.length; index++ ) {
      // console.log(this.toDoList[index].id);
      if ( this.toDoList[index].id === id ) {
        this.toDoList[index].isPending = status === 1;
        this.toDoList[index].isDoing = status === 2;
        this.toDoList[index].isDone = status === 3;
      }
    }
  }

  /**
   * Add a new to do Task
   * By default the task will be set as Pending
   */
  addTask(name: string, description: string, username: string): any {
    let id = this.toDoList[this.toDoList.length - 1].id + 1
    const task = new Todo(id, username, name, description, true, false, false);
    // console.log(task);
    this.toDoList.push(task);
  }

  /**
   * Delete a single task
   */
  deleteTask(id): any {
    for ( let index = 0; index < this.toDoList.length; index++ ) {
      if ( this.toDoList[index].id === id ) {
        this.toDoList.splice(index, 1);
      }
    }
  }
}
