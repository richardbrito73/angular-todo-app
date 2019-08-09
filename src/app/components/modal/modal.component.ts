import { Output, EventEmitter, Component, OnInit } from '@angular/core';
import { FormControl, Validators} from '@angular/forms';

import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {
  @Output()
  passData: EventEmitter<Object> = new EventEmitter();
  taskFormName: FormControl;
  taskFormDescription: FormControl;

  constructor(private modalService: NgbModal) {
    this.taskFormName = new FormControl('', Validators.required);
    this.taskFormDescription = new FormControl('', Validators.required);
  }

  ngOnInit() {
  }

  setValues() {
    this.passData.emit({
      taskName: this.taskFormName,
      taskDescription: this.taskFormDescription
    });
  }

}
