import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../../../core/services/auth.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  loginForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router

  ) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      console.log('Form Submitted!', this.loginForm.value);

      this.authService.login(this.loginForm.value).subscribe(
        (res) => {
          console.log('Login Success!', res);
          // Go to navigatio breeds-cat
          localStorage.setItem('user', JSON.stringify(res.user));
          this.router.navigate(['/breeds-cat']);
        },
        (error) => {
          console.error('Login Error!', error);
        }
      );
    } else {
      console.log('Form not valid');
      this.loginForm.markAllAsTouched();

    }
  }

  get email() { return this.loginForm.get('email'); }
  get password() { return this.loginForm.get('password'); }

  onGoToRegister() {
    this.router.navigate(['/auth/register']);
  }
}
