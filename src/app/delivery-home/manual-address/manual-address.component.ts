import { Component, OnInit } from '@angular/core';
import { DeliveryHomeService } from '../delivery-home.service';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-manual-address',
  templateUrl: './manual-address.component.html',
  styleUrls: ['./manual-address.component.css']
})
export class ManualAddressComponent implements OnInit {

  constructor(
    private deliveryHomeService: DeliveryHomeService,
    private router: Router,
    private formBuilder: FormBuilder
  ) { }

  bairros: any[];
  form: FormGroup;

  ngOnInit() {
    this.bairros = this.deliveryHomeService.getDistrict();
    this.form = this.formBuilder.group({
      localidade: new FormControl({ value: 'Rio de Janeiro', disabled: true }),
      logradouro: ['', Validators.required],
      bairro: ['', Validators.required],
      numero: ['', Validators.required],
      complemento: ['', Validators.minLength(6)]
    });
  }

  addManualAddress(): void {
    if (this.form.valid) {
      this.router.navigate(['carte']);
    } else {
      alert('Preencha todos os campos');
    }
  }

  back(): void {
    this.router.navigate(['']);
  }
}
