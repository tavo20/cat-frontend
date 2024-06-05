import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginComponent } from './login.component';
import { RouterTestingModule } from '@angular/router/testing';
import { By } from '@angular/platform-browser';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let router: Router;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginComponent ],
      imports: [ ReactiveFormsModule, RouterTestingModule ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    router = TestBed.inject(Router);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize the form with empty fields', () => {
    const loginForm = component.loginForm;
    expect(loginForm).toBeDefined();
    expect(loginForm.get('email')?.value).toBe('jbloih');
    expect(loginForm.get('password')?.value).toBe('');
  });

  it('should display error message when form is invalid and submitted', () => {
    component.onSubmit();
    fixture.detectChanges();
    const emailErrors = component.email?.errors || {};
    const passwordErrors = component.password?.errors || {};

    expect(emailErrors['required']).toBeTruthy();
    expect(passwordErrors['required']).toBeTruthy();
  });

  it('should navigate to home on successful login', () => {
    jest.spyOn(router, 'navigate');
    component.loginForm.setValue({ email: 'test@example.com', password: 'password' });
    component.onSubmit();
    expect(router.navigate).toHaveBeenCalledWith(['/']);
  });
});
