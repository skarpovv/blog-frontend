import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../../../services/auth";
import {catchError, debounceTime, delay, filter, map, of, tap, timer} from "rxjs";
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
    console.log("Submit")


    this._authService.login(this.form.value).pipe(
      tap(value => {
        console.log('http tap')
        localStorage.setItem('isAuth', 'true')
        this._router.navigate([''])
      }),
      catchError((err) => {
        console.log(err['error']['messgae'])
        this.loginError = err['error']['messgae'] || 'error';
        this._cdr.detectChanges();
        return of(err);
      })
    ).subscribe();
  }
}
