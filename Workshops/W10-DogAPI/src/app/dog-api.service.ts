import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { DogResponse } from './DogResponse';
import { BreedListResponse } from './BreedListResponse';

@Injectable({
  providedIn: 'root'
})
export class DogAPIService {

  constructor(private _http: HttpClient) { }

  getRandomDog() {
    const url = 'https://dog.ceo/api/breeds/image/random';
    return this._http.get<DogResponse>(url);  // Returnerar en Observable<DogResponse>
  }

  getBreedList() {
    const url = 'https://dog.ceo/api/breeds/list/all';
    return this._http.get<BreedListResponse>(url);
  }

  getRandomDogByBreed(breed: string) {
    const url = `https://dog.ceo/api/breed/${breed}/images/random`;
    return this._http.get<DogResponse>(url);
  }

}
