import { Component, OnInit } from '@angular/core';
import { ChuckNorrisAPIService } from '../chuck-norris-api.service';
import { ChuckNorrisAPIResponse } from '../ChuckNorrisAPIResponse';

@Component({
  selector: 'app-chuck-norris-joke',
  template: `
    <div class="parent">
      <div class="joke">{{ theJoke.value }}</div>
    </div>
  `,
  styles: [`
  
  .parent {
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: Verdana, Arial;
  }

  .joke {
    width: 400px;
  }

  `]
})
export class ChuckNorrisJokeComponent implements OnInit {

  theJoke: ChuckNorrisAPIResponse = { value: '' };

  constructor(private _chuckNorrisAPIService: ChuckNorrisAPIService) { };

  ngOnInit(): void {
    this._chuckNorrisAPIService.getJoke().subscribe((data) => { 
      this.theJoke = data;
    });    
  }

}
