import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; 
import { RouterModule } from '@angular/router';

import { ZipCodeFormComponent } from './zip-code-form/zip-code-form.component';
import { ConfirmAddressComponent } from './confirm-address/confirm-address.component';
import { DeliveryHomeRoutingModule } from './delivery-home.routing';
import { DeliveryHomeService } from './delivery-home.service';
import { ManualAddressComponent } from './manual-address/manual-address.component';

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
    ConfirmAddressComponent,
    ManualAddressComponent
  ],
  providers: [ 
    DeliveryHomeService
  ]
})
export class DeliveryHomeModule { }
