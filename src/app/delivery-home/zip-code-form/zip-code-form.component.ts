import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Address } from '../../models/address.model';
import { ZipCodeService } from '../zip-code.service';

@Component({
  selector: 'app-zipcode-form',
  templateUrl: './zip-code-form.component.html',
  styleUrls: ['./zip-code-form.component.css']
})
export class ZipCodeFormComponent implements OnInit {
  constructor(private zipCodeService: ZipCodeService, private router: Router) { }

  zipCode: string;
  address: Address;

  getAddress(): any {
    this.zipCodeService.getAddress(this.zipCode).subscribe(address => {
      this.address = address;
      this.router.navigate(['confirmaddress'])
    }, err => {
      alert('Não conseguimos encontrar o endereço :(')
      console.error(err);
    });
  }

  ngOnInit() {
  }

}
