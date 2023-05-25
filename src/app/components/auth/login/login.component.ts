import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../../../services/auth";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginComponent implements OnInit {
  form: FormGroup
  loginError: string;

  constructor(
    private _fb: FormBuilder,
    private _authService: AuthService,
    private _router: Router,
    private _cdr: ChangeDetectorRef,
  ) {}

  ngOnInit() {
    this.form = this._fb.group({
      login: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]]
    })
  }

  get loginControl(): FormControl {
    return this.form.get('login') as FormControl;
  }

  get passwordControl(): FormControl {
    return this.form.get('password') as FormControl
  }

  submit() {
    if (this.form.invalid) {
      return;
    }

    this._authService.login(this.form.value).subscribe({
      next: () => {
        this._router.navigate(['/blogs'])
      },
      error: (err) => {console.error(err)}
    });
  }
}
