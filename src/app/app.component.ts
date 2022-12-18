import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { ResourceService } from './services/resources.service';
import { SearchResults } from './types/SearchResults';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'npm-finder-ui';
  searchKey = '';
  searchResults!: SearchResults;
  pageIndex = 0;
  length = 0;
  pageSizeOptions = [5, 10, 25];
  pageEvent!: PageEvent;
  pageSize = 20;

  constructor(private resourceService: ResourceService) {

  }
  ngOnInit() {
    
  }

  submitSearch(searchKey: string) {
    this.resourceService.getSearchPackageByName(searchKey).subscribe((matchResult) => {
      this.searchResults = matchResult;
      this.length = matchResult.totalNumOfResults;
      this.searchKey = searchKey;
    });
  }

  handlePageEvent(e: PageEvent) {
    this.pageEvent = e;
    this.length = e.length;
    this.pageSize = e.pageSize;
    this.pageIndex = e.pageIndex;

    const lastResultIndex = this.pageIndex * this.pageSize;
    this.resourceService.getSearchPackageByName(this.searchKey, lastResultIndex).subscribe((matchResult) => {
      this.searchResults = matchResult;
      this.length = matchResult.totalNumOfResults;
    });
  }
}
