import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Animal } from '../../interfaces/Animal';

import { ListService } from '../../services/list.service';

@Component({
  selector: 'app-list-render',
  imports: [CommonModule],
  templateUrl: './list-render.component.html',
  styleUrl: './list-render.component.css'
})
export class ListRenderComponent {
  animals: Animal[] = [
    {
      name: "turca", type: "dog", age: 2
    },
    {
      name: "edna", type: "cat", age: 2
    },
    {
      name: "tom", type: "dog", age: 6
    },
    {
      name: "frida", type: "dog", age: 5
    },
    {
      name: "camila", type: "cat", age: 2
    },
    {
      name: "bob", type: "horse", age: 6
    },
    {
      name: "pitu", type: "bird", age: 4
    },
    {
      name: "tubias", type: "shark", age: 1
    }
  ]

  constructor(private listService: ListService) {}
  
  animalDetais = "";

  showAge = (animal: Animal) => {
    this.animalDetais = `O pet ${animal.name} tem ${animal.age} anos`
  }

  removeAnimal = (animal: Animal) => {
    this.animals = this.listService.remove(this.animals, animal);
  }
}
