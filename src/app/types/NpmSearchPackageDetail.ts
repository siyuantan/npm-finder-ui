import { INpmSearchPackageDetail } from "./INpmSearchPackageDetail";

export class NpmSearchPackageDetail {
  public name: string
  public scope: string
  public version: string
  public description: string
  public keywords: string[]
  public date: string
  public links: {npm: string, homepage: string, repository: string, bugs: string}
  public author: {name: string, email: string, publisher: string}
  public maintainers: {username: string, email: string}[]
  
  constructor(npmPackageDetail: INpmSearchPackageDetail) {
    this.name = npmPackageDetail.name;
    this.scope = npmPackageDetail.scope;
    this.version = npmPackageDetail.version;
    this.description = npmPackageDetail.description;
    this.keywords = npmPackageDetail.keywords;
    this.date = npmPackageDetail.date;
    this.links = npmPackageDetail.links;
    this.author = npmPackageDetail.author;
    this.maintainers = npmPackageDetail.maintainers;
  }
}