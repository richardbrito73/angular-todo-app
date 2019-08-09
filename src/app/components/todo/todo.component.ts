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

  public modal: any;

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
  editTask(): any {
    this._todoService.editTask(this.taskId, this.editTaskName, this.editTaskDescription, 'richardbrito');
    this.getTasks();
  }

  /**
   * Add a new to do Task
   * By default the task will be set as Pending
   */
  addTask() {
    console.log(this.addTaskName);
    if (this.addTaskName.length > 0) {
      this._todoService.addTask(this.addTaskName, this.addTaskDescription, "richardbrito");
      this.getTasks();
    }
    this.closeModal();
  }

  /**
   * Delete a single task
   */
  deleteTask() {
    this._todoService.deleteTask(this.taskId);
    this.getTasks();
    this.closeModal();
  }

  openModal(taskId: number, modal: any) {
    this.taskId = taskId;
    this.modal = modal;
    modal.show();
  }

  closeModal() {
    this.modal.hide();
    this.addTaskName = '';
    this.addTaskDescription = '';
    this.editTaskName = '';
    this.editTaskDescription = '';
  }

}
