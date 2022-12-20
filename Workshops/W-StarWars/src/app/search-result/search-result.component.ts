import { Component } from '@angular/core';
import { SearchResult } from '../SearchResult';


@Component({
  selector: 'app-search-result',
  template: `
    <div class="row">
      <div class="col">
        <table class="table">
          <tr>
            <th>{{ searchResultColumns.column1 }}</th>
            <th>{{ searchResultColumns.column2 }}</th>
            <th>{{ searchResultColumns.column3 }}</th>
            <th></th>
          </tr>
          <tr *ngFor="let result of searchResult">
            <td>{{ result.column1 }}</td>
            <td>{{ result.column2 }}</td>
            <td>{{ result.column3 }}</td>
            <td>
              <button class="btn btn-outline-secondary">More</button>
            </td>
          </tr>
        </table>
      </div>
    </div>
  `,
  styles: [``]
})
export class SearchResultComponent {

  searchResult: SearchResult[] = [
    { column1: 'Rad1C1', column2: 'Rad1C2', column3: 'Rad1C3' },
    { column1: 'Rad2C1', column2: 'Rad2C2', column3: 'Rad3C3' },
    { column1: 'Rad3C1', column2: 'Rad3C2', column3: 'Rad3C3' }
  ];

  searchResultColumns: SearchResult = { column1: 'Heading 1', column2: 'Heading 2', column3: 'Heading 3'};

}
