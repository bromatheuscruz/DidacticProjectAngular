import { HttpClientModule } from '@angular/common/http';
import { ZipCodeService } from './zip-code.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; 
import { RouterModule } from '@angular/router';

import { ZipCodeFormComponent } from './zip-code-form/zip-code-form.component';
import { ConfirmAddressComponent } from './confirm-address/confirm-address.component';
import { DeliveryHomeRoutingModule } from './delivery-home.routing';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    DeliveryHomeRoutingModule,
    HttpClientModule
  ],
  declarations: [
    ZipCodeFormComponent,
    ConfirmAddressComponent
  ],
  providers: [ 
    ZipCodeService
  ]
})
export class DeliveryHomeModule { }
