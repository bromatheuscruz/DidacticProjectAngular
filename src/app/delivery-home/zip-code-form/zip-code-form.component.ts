import { DeliveryHomeService } from './../delivery-home.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-zipcode-form',
  templateUrl: './zip-code-form.component.html',
  styleUrls: ['./zip-code-form.component.css']
})
export class ZipCodeFormComponent implements OnInit {
  constructor(private deliveryHomeService: DeliveryHomeService, private router: Router) { }

  zipCode: string;

  getAddress(): any {
    this.deliveryHomeService.getAddress(this.zipCode).subscribe(address => {
      DeliveryHomeService.address = address;
      this.router.navigate(['confirmaddress']);

    }, err => {
      alert('Não conseguimos encontrar o endereço :(')
      console.error(err);
    });
  }

  ngOnInit() {
  }

}
