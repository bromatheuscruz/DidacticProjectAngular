import { HttpClient } from '@angular/common/http';
import { Address } from './../models/address.model';
import { Injectable, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DeliveryHomeService {

  static address;

  getAddress(zipCode): Observable<Address> {
    return this.http.get<Address>(`https://viacep.com.br/ws/${zipCode}/json/`);
  }

  getDistrict(): any {
    return [{ name: 'Penha' }, { name: 'Olaria' }, { name: 'Penha' }, { name: 'Bonsucesso' }];
  }

  constructor(private http: HttpClient) { }
}
