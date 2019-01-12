import { Address } from './../../models/address.model';
import { DeliveryHomeService } from './../delivery-home.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-confirm-address',
  templateUrl: './confirm-address.component.html',
  styleUrls: ['./confirm-address.component.css']
})
export class ConfirmAddressComponent implements OnInit {

  constructor(private router: Router) { }

  address: Address;

  back() {
    this.router.navigate(['']);
  }

  ngOnInit() {
    this.address = DeliveryHomeService.address;
  }

}
