import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { NpmPackageDetail } from './types/NpmPackageDetail';
import { catchError, map } from 'rxjs/operators';
import { INpmPackageSearchDetail } from './types/INpmPackageSearchDetail';

@Injectable({
  providedIn: 'root'
})
export class ResourceService {

  constructor(private http: HttpClient) { }

  getSearchPackageByName(packageName: string): Observable<NpmPackageDetail[]> {
    return this.http.get<INpmPackageSearchDetail>(`https://registry.npmjs.org/-/v1/search?text=${packageName}`)
    .pipe(
      map((response) => response.objects
      .map(packageDetail => new NpmPackageDetail(packageDetail.package))
      ),
      catchError(error => throwError(() => error))
    );
  }

}
