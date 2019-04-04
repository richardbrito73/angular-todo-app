import { Component, OnInit } from '@angular/core';

import { Todo} from '../../todo/todo.model';
import { TodoService } from '../../todo/todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
  providers: [
    TodoService
  ]
})
export class TodoComponent implements OnInit {

  public taskIdCounter: number;
  public toDoList: Todo[];
  public toDoTask: any;

  constructor(private _todoService: TodoService) { }

  ngOnInit() {
    this.taskIdCounter = 0;

    this.getTasks();
  }


  /**
   * Get all Tasks
   */
  getTasks() {
    this.toDoList = this._todoService.getTasks();
  }

  /**
   * Get a single Task
   */
  getTask(id: number): any {
    this.toDoTask = this._todoService.getTask(id);
  }

  /**
   * Edit a single Task
   */
  editTask(id, name: string, description: string, username: string): any {
    this._todoService.editTask(id, name, description, username);
    this.getTasks();
  }

  /**
   * Add a new to do Task
   * By default the task will be set as Pending
   */
  addTask(id, name: string, description: string, username: string): any {
    this._todoService.addTask(id, name, description, username);
    this.getTasks();
  }

  /**
   * Delete a single task
   */
  deleteTask(id): any {
    this._todoService.deleteTask(id);
    this.getTasks();
  }

}
