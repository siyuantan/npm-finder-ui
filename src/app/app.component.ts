import { Component, OnInit } from '@angular/core';
import { ResourceService } from './resources.service';
import { NpmPackageDetail } from './types/NpmPackageDetail';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'npm-finder-ui';
  searchResults!: NpmPackageDetail[];

  constructor(private resourceService: ResourceService) {

  }
  ngOnInit() {
    
  }

  submitSearch(searchKey: string) {
    this.resourceService.getSearchPackageByName(searchKey).subscribe((matchResult) => {
      this.searchResults = matchResult;
    });
  }
}
