import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AppRoutes } from './app.routes';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, AppRoutes],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  user = {
    name: "Joaquim",
    age: 19,
    job: "Developer",
    email: "joaquim@admin.com",
    role: "admin"
  }

  title = 'curso-angular';
}
