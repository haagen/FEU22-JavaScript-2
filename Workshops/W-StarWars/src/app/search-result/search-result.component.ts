import { Component, Input, Output, EventEmitter } from '@angular/core';
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
          <tr *ngFor="let result of searchResult; let i=index">
            <td>{{ result.column1 }}</td>
            <td>{{ result.column2 }}</td>
            <td>{{ result.column3 }}</td>
            <td>
              <button class="btn btn-outline-secondary" (click)="moreBtnClick(i)">More</button>
            </td>
          </tr>
        </table>
      </div>
    </div>
  `,
  styles: [``]
})
export class SearchResultComponent {

  @Input() searchResult: SearchResult[] = [];
  @Input() searchResultColumns: SearchResult = { column1:'' };
  @Output() selected = new EventEmitter<number>();

  moreBtnClick(index: number) {
    this.selected.emit(index);
  }

}
