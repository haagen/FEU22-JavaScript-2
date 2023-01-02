import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ChuckNorrisAPIResponse } from './ChuckNorrisAPIResponse';

@Injectable({
  providedIn: 'root'
})
export class ChuckNorrisAPIService {

  constructor(private _httpClient : HttpClient) { }

  getJoke() {
    return this._httpClient.get<ChuckNorrisAPIResponse>('https://api.chucknorris.io/jokes/random');  // returnerar en "Observable av ChuckNorrisAPIResponse"     
  }
}
