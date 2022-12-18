import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { NpmSearchPackageDetail } from '../types/NpmSearchPackageDetail';
import { catchError, map } from 'rxjs/operators';
import { INpmPackageSearchDetail } from '../types/INpmPackageSearchDetail';
import { SearchResults } from '../types/SearchResults';
import { INpmPackageDetail } from '../types/INpmPackageDetail';

@Injectable({
  providedIn: 'root'
})
export class ResourceService {

  constructor(private http: HttpClient) { }

  getSearchPackageByName(packageName: string, lastResultIndex: number = 0): Observable<SearchResults> {
    return this.http.get<INpmPackageSearchDetail>(`https://registry.npmjs.org/-/v1/search?text=${packageName}&from=${lastResultIndex}`)
      .pipe(
        map((response) => {
          const total = response.total;
          const all = response.objects
            .map(packageDetail => new NpmSearchPackageDetail(packageDetail.package));
          return new SearchResults(total, all);
        }),
        catchError(error => throwError(() => error))
      );
  }

  getPackageDetail(packageName: string): Observable<INpmPackageDetail> {
    return this.http.get<INpmPackageDetail>(`https://registry.npmjs.org/${packageName}`);
  }

}
