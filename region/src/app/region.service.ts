import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class RegionService {

  constructor(private http: HttpClient) {}

  fetchRegion(): Observable<Object> {
    return this.http.get('https://ncddpdb.dswd.gov.ph/api/ceac/lib_region/');
  }
}
