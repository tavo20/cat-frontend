import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';

// import { IonRouterOutlet } from "@ionic/angular/standalone";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'cat-frontend';
}
