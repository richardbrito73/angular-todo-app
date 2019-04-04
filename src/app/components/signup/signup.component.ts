import { Component, OnInit } from '@angular/core';
import { User } from '../../user/user.model';
import { FormControl, Validators, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  public user: User;
  public confirmPassword: string;

  public signUpForm: FormGroup;

  constructor(public _fb: FormBuilder) {
    this.signUpForm = _fb.group({
      firstNameForm: [null, Validators.required],
      LastNameForm: [null, Validators.required],
      usernameForm: [null, Validators.required],
      emailForm: [null, Validators.required, Validators.email],
      passwordForm: [null, Validators.required]
    });
  }

  ngOnInit() {
    this.user = new User(0, '', '', '', '', '');
  }


  get firstNameForm() { return this.signUpForm.get('emailForm'); }
  get LastNameForm() { return this.signUpForm.get('passwordForm'); }
  get usernameForm() { return this.signUpForm.get('emailForm'); }
  get emailForm() { return this.signUpForm.get('passwordForm'); }
  get passwordForm() { return this.signUpForm.get('emailForm'); }

  // resetForm(form: NgForm) {
  //   form.reset();
  // }

}
