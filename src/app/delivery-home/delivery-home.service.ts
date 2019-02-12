import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DeliveryHomeService {

  static address;

  getAddress(zipCode): Observable<any> {
    return this.http.get<any>(`https://viacep.com.br/ws/${zipCode}/json/`);
  }

  getDistrict(): any {
    return [{ name: 'Penha' }, { name: 'Olaria' }, { name: 'Penha' }, { name: 'Bonsucesso' }];
  }

  constructor(private http: HttpClient) { }
}
