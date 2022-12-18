import { NpmPackageDetail } from "./NpmPackageDetail";

export class SearchResults {
  public totalNumOfResults: number;
  public results: NpmPackageDetail[];

  constructor(totalNumOfResults: number, results: NpmPackageDetail[]) {
    this.totalNumOfResults = totalNumOfResults;
    this.results = results;
  }   
}