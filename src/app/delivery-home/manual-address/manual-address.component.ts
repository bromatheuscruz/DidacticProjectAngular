import { Address } from './../../models/address.model';
import { Component, OnInit } from '@angular/core';
import { DeliveryHomeService } from '../delivery-home.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-manual-address',
  templateUrl: './manual-address.component.html',
  styleUrls: ['./manual-address.component.css']
})
export class ManualAddressComponent implements OnInit {

  constructor(private deliveryHomeService: DeliveryHomeService,
    private router: Router) { }

  address: any = {
    localidade: 'Rio de Janeiro',
    logradouro: '',
    numero: '',
    complemento: ''
  };
  bairros: any[];

  addManualAddress(): void {
  }

  ngOnInit() {
    this.bairros = this.deliveryHomeService.getDistrict();
  }

  back(): void {
    this.router.navigate(['']);
  }
}
