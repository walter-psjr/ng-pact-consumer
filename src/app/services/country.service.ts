import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Country } from './country.model';

export const PATH = '/api/countries';

@Injectable({
  providedIn: 'root'
})
export class CountryService {
  private path = PATH;

  constructor(private httpClient: HttpClient) {}

  setUrlPrefix(prefix: string) {
    this.path = `${prefix}${this.path}`;
  }

  get(id: string): Observable<Country> {
    return this.httpClient.get<Country>(`${this.path}/${id}`, this.getHttpOptions());
  }

  private getHttpOptions() {
    return {
      headers: {
        Accept: 'application/json'
      }
    }
  }
}
