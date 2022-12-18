import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {

  @Output() onSubmitSearch = new EventEmitter<string>();

  searchInput = '';
  constructor() { }

  ngOnInit(): void {
  }

  submitSearch() {
    console.warn('Submit entered;', this.searchInput);
    this.onSubmitSearch.emit(this.searchInput);
  }
}
