import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Animal } from '../../interfaces/Animal';

import { ListService } from '../../services/list.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-list-render',
  imports: [CommonModule, RouterModule],
  templateUrl: './list-render.component.html',
  styleUrl: './list-render.component.css'
})
export class ListRenderComponent {
  animals: Animal[] = [];

  constructor(private listService: ListService) {
    this.getAnimals();
  }
  
  animalDetais = "";

  showAge = (animal: Animal) => {
    this.animalDetais = `O pet ${animal.name} tem ${animal.age} anos`
  }

  removeAnimal = (animal: Animal) => {
    this.animals = this.listService.remove(this.animals, animal);
  }
  
  getAnimals = ():void => {
    this.listService.getAll().subscribe((apiAnimals) => (this.animals = apiAnimals));
  }
}
