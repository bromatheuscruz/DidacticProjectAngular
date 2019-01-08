import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MainDeliveryComponent } from './main-delivery/main-delivery.component';
import { ZipcodeFormComponent } from './zipcode-form/zipcode-form.component';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule
  ],
  declarations: [
    HeaderComponent,
    FooterComponent,
    MainDeliveryComponent,
    ZipcodeFormComponent
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    MainDeliveryComponent
  ]
})
export class DeliveryHomeModule { }
