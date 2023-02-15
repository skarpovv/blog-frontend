import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{
  form: FormGroup

  constructor(private _fb: FormBuilder) {
  }

  ngOnInit() {
    this.form = this._fb.group({
      username: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]]
    })
  }

  get usernameControl(): FormControl {
    return this.form.get('username') as FormControl;
  }
  get passwordControl(): FormControl {
    return this.form.get('password') as FormControl
  }

  submit() {
    console.log('form submitted', this.form)
  }
}
