import { Component } from '@angular/core';
import { ChangeNumberComponent } from '../change-number/change-number.component';

@Component({
  selector: 'app-emiter',
  imports: [ChangeNumberComponent],
  templateUrl: './emiter.component.html',
  styleUrl: './emiter.component.css'
})
export class EmiterComponent {
  myNumber: number = 0;

  onChangeNumber = () => {
    this.myNumber = Math.floor(Math.random() * 100);
  }
}
