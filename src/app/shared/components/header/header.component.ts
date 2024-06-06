import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  router = inject(Router);

  public onCloseSesion() {
    console.log('Close Sesion');
    localStorage.removeItem('user');
    this.router.navigate(['/auth/login']);

  }

  public onGoToProfile() {
    this.router.navigate(['/profile']);
  }
}
