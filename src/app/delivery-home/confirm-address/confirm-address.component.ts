import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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

  constructor(
    private router: Router,
    private formBuilder: FormBuilder
  ) { }

  address: Address;
  confirmForm: FormGroup;


  back() {
    this.router.navigate(['']);
  }

  carte() {
    this.router.navigate(['carte']);
  }

  ngOnInit() {
    this.address = DeliveryHomeService.address;
    this.loadFormBuilded();
  }

  onSubmit(){
    if (this.confirmForm.valid) {
      this.carte();
    }
  }

  loadFormBuilded() {
    this.confirmForm = this.formBuilder.group({
      localidade: [this.address.localidade, Validators.required],
      bairro: [this.address.bairro, Validators.required],
      logradouro: [this.address.logradouro, Validators.required],
      numero: [this.address.numero, Validators.required],
      complemento: [this.address.complemento, [Validators.required, Validators.minLength(6)]]
    });
  }

}
