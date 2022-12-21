import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.css']
})
export class SearchFormComponent {

  @Output() search = new EventEmitter<[string, string]>();
  searchForm: { searchText: string, searchResource: string } = { searchText: '', searchResource: 'people' };

  searchBtnClick() {
    this.search.emit([ this.searchForm.searchText, this.searchForm.searchResource ]);
  }

}
