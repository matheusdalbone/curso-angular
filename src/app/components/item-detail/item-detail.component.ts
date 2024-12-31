import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Animal } from '../../interfaces/Animal';

import { ListService } from '../../services/list.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-item-detail',
  imports: [CommonModule],
  templateUrl: './item-detail.component.html',
  styleUrl: './item-detail.component.css'
})
export class ItemDetailComponent {
  animal?: Animal;

  constructor(private listService: ListService, private route: ActivatedRoute) {
    this.getAnimal();
  }

  getAnimal = () => {
    const id = this.route.snapshot.paramMap.get("id");

    if (id) {
      this.listService.getItem(id).subscribe((animalApi) => (this.animal = animalApi));
    } else {
      console.warn("Id is null");
    }
  }
}
