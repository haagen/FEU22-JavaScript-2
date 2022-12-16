import { Component, Input } from '@angular/core';
import { Dog } from '../dog';

@Component({
  selector: 'app-dog-card',
  templateUrl: './dog-card.component.html',
  styleUrls: ['./dog-card.component.css']
})
export class DogCardComponent {

  @Input() theDog: Dog = { name: '', breed: '', liked: false, url: '', description: '' };

}
