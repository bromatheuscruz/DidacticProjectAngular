import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Address } from '../models/address.model';

@Injectable({
  providedIn: 'root'
})
export class ZipCodeService {

  constructor(private http: HttpClient) { }

  getAddress(zipCode): Observable<Address> {
    return this.http.get<Address>(`https://viacep.com.br/ws/${zipCode}/json/`);
  }
}
