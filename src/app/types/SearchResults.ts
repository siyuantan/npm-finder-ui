import { NpmSearchPackageDetail } from "./NpmSearchPackageDetail";

export class SearchResults {
  public totalNumOfResults: number;
  public results: NpmSearchPackageDetail[];

  constructor(totalNumOfResults: number, results: NpmSearchPackageDetail[]) {
    this.totalNumOfResults = totalNumOfResults;
    this.results = results;
  }   
}