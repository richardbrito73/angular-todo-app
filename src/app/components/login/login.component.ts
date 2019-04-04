import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormBuilder, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public loginForm: FormGroup;

  constructor( private _fb: FormBuilder) {
    this.loginForm = _fb.group({
      emailForm: [null, Validators.required, Validators.email],
      passwordForm: [null, Validators.required]
    });
  }

  ngOnInit() {
  }

  get emailForm() { return this.loginForm.get('passwordForm'); }
  get passwordForm() { return this.loginForm.get('emailForm'); }


}
