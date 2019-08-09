import { Component, OnInit, ViewChild} from '@angular/core';

import { Todo} from '../../todo/todo.model';
import { TodoService } from '../../todo/todo.service';

import { ModalDirective } from 'angular-bootstrap-md';


@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
  providers: [
    TodoService
  ]
})
export class TodoComponent implements OnInit {

  @ViewChild(ModalDirective) modal: ModalDirective;
  public taskId: number;
  public taskIdCounter: number;
  public toDoList: Todo[];
  public toDoTask: any;

  public addTaskName: string;
  public addTaskDescription: string;

  public editTaskName: string;
  public editTaskDescription: string;

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
  getTask() {
    console.log(this.taskId);
    this.toDoTask = this._todoService.getTask(this.taskId);
    this.editTaskName = this.toDoTask.name;
    this.editTaskDescription = this.toDoTask.description;
  }

  /**
   * Edit a single Task
   */
  editTask(id: number, name: string, description: string, username: string): any {
    this._todoService.editTask(id, name, description, username);
    // this.getTasks();
  }

  /**
   * Add a new to do Task
   * By default the task will be set as Pending
   */
  addTask(id: number, name: string, description: string, username: string): any {
    this._todoService.addTask(id, name, description, username);
    // this.getTasks();
  }

  /**
   * Delete a single task
   */
  deleteTask(id: number): any {
    this._todoService.deleteTask(id);
    // this.getTasks();
  }

  getData(eventMsg: any) {
    this.addTaskName = eventMsg.taskName;
    this.addTaskDescription = eventMsg.taskName;
  }

  openModal(taskId: number, modal: any) {
    this.taskId = taskId;
    modal.show();
  }

}
