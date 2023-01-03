import { Component, OnInit } from '@angular/core';

import { DogAPIService } from './dog-api.service';
import { DogResponse } from './DogResponse';

@Component({
  selector: 'app-root',
  template: `
    <h1>The Dog API</h1>
    <div class="parent">
      <div class="dogSelect">
        <select (change)="onBreedChange($event)"> 
          <option *ngFor="let breed of dogBreedList" value="{{ breed }}">{{ breed }}</option>
        </select>
      </div>
      <div class="dogImage" *ngIf="theDog != undefined && theDog.message != ''">
        <img src="{{ theDog.message }}">
      </div>
    </div>
  `,
  styles: [`
  .parent{
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-family: Arial, Verdana;
  }  

  .dogImage{
    margin-top: 10px;
  }  
  .dogImage img {
    max-width: 400px;
  }   
  `]
})
export class AppComponent implements OnInit {
  theDog: DogResponse = { message: '', status: ''}; 
  dogBreedList: string[] = []; 

  constructor(private _dogAPI: DogAPIService) {}

  ngOnInit(): void {
    
    /* This is the code before the extra assignment
    this._dogAPI.getRandomDog().subscribe((data) => {
      this.theDog = data;
    })
    */

   this._dogAPI.getBreedList().subscribe((data) => {
    this.dogBreedList = Object.keys(data.message);
   });
  }

  onBreedChange(event: Event) {
    let selectedBreed = (event.target as HTMLInputElement).value;
    this._dogAPI.getRandomDogByBreed(selectedBreed).subscribe((data) => {
      this.theDog = data;
    });
  }

}
