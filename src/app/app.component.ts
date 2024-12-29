import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FirstComponentComponent } from "./components/first-component/first-component.component";
import { ParentDataComponent } from "./components/parent-data/parent-data.component";
import { DirectivesComponent } from './components/directives/directives.component';
import { IfRenderComponent } from './components/if-render/if-render.component';
import { EventosComponent } from './components/eventos/eventos.component';
import { EmiterComponent } from './components/emiter/emiter.component';
import { ListRenderComponent } from './components/list-render/list-render.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FirstComponentComponent, ParentDataComponent, DirectivesComponent, IfRenderComponent, EventosComponent, EmiterComponent, ListRenderComponent],
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
