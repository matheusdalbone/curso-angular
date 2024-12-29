import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-list-render',
  imports: [CommonModule],
  templateUrl: './list-render.component.html',
  styleUrl: './list-render.component.css'
})
export class ListRenderComponent {
  animals = [
    {
      name: "turca", type: "dog"
    },
    {
      name: "edna", type: "cat"
    },
    {
      name: "tom", type: "dog"
    },
    {
      name: "frida", type: "dog"
    },
    {
      name: "camila", type: "cat"
    },
    {
      name: "bob", type: "horse"
    },
    {
      name: "pitu", type: "bird"
    },
    {
      name: "tubias", type: "shark"
    }
  ]
}
