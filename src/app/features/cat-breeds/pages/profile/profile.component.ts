import { Component } from '@angular/core';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent {
  name = '';
  email = '';
  constructor() {}

  ngOnInit() {
    let userString = localStorage.getItem('user') || '{}';
    const { name, email } = JSON.parse(userString);

    this.name = name;
    this.email = email;
    
  }

}
