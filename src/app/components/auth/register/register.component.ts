import {Component, OnInit} from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  ValidationErrors,
  ValidatorFn,
  Validators
} from "@angular/forms";
import {AuthService} from "../../../services/auth";
import {catchError, of, tap} from "rxjs";
import {Router} from "@angular/router";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  form: FormGroup;


  constructor(private _fb: FormBuilder, private _authService: AuthService, private _router: Router){
  }

  ngOnInit(): void {
    this.form = this._fb.group({
      fullName: ['', [Validators.minLength(3), Validators.required, this._specialSymbolValidator]],
      username: ['', [Validators.minLength(3), Validators.required]],
      email: ['', [Validators.email, Validators.required]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      confirmPassword: ['', [Validators.required, Validators.minLength(8)]]
    }, {validators: this._passwordsMatchValidator} )
  }

  get usernameControl(): FormControl {
    return this.form.get('username') as FormControl;
  }

  get nameControl(): FormControl {
    return this.form.get('fullName') as FormControl
  }

  get emailControl(): FormControl {
    return this.form.get('email') as FormControl
  }

  get passwordControl(): FormControl {
    return this.form.get('password') as FormControl
  }

  get confirmPasswordControl(): FormControl {
    return this.form.get('confirmPassword') as FormControl
  }

  submit() {
    this.confirmPasswordControl.disable()

    this._authService.register(this.form.value).pipe(
      tap((value) => {
        localStorage.setItem('isAuth', 'true')
        this._router.navigate([''])
        console.log('Value: ', value)
      }),
      catchError((err) => {
        console.log('Error: ', err)
        return of(null)
      })
    ).subscribe()
  }

  private _specialSymbolValidator(control: AbstractControl): ValidationErrors | null {
    if (!control.value) return null;
    const hasSpecialSymbols = new RegExp(/[^A-Za-z 0-9]/gi).test(control.value);

    return !hasSpecialSymbols ? null : {hasSpecialSymbols: true};
  }

  private _passwordsMatchValidator(form: AbstractControl): ValidationErrors | null {
    if (!form.get('password').value || !form.get('confirmPassword').value) return null;
    const isPasswordsMatch = form.get('password').value === form.get('confirmPassword').value
    return isPasswordsMatch ? null : {passwordsMismatch: true}
  }
}
