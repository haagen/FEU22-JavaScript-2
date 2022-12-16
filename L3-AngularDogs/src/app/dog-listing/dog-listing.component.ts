import { Component } from '@angular/core';
import { DogService } from '../dog.service';
import { Dog } from '../dog';

@Component({
  selector: 'app-dog-listing',
  templateUrl: './dog-listing.component.html',
  styleUrls: ['./dog-listing.component.css']
})
export class DogListingComponent {
  dogs: Dog[] = [];

  constructor(dogService: DogService) {
    this.dogs = dogService.getDogs();
  }
}
