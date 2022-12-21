import { Component } from '@angular/core';
import { SearchResult } from './SearchResult';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'W-StarWars';
  searchResult: SearchResult[] = [];
  searchResultColumns: SearchResult = { column1:'' };  

  onSearchEventReceived(searchTerms: [string, string]) {
    console.log(searchTerms[0] + ' ' + searchTerms[1]);
    this.onSearchResultReceived();
  }

  onSearchResultReceived() {
    this.searchResult = [
      { column1: 'Rad1C1', column2: 'Rad1C2', column3: 'Rad1C3' },
      { column1: 'Rad2C1', column2: 'Rad2C2', column3: 'Rad3C3' },
      { column1: 'Rad3C1', column2: 'Rad3C2', column3: 'Rad3C3' }
    ];
  
    this.searchResultColumns = { column1: 'Heading 1', column2: 'Heading 2', column3: 'Heading 3'};
  }

  onMoreResultChosen(index: number) {
    console.log('App-Root got ' + index);
  }

}
