import { Routes, RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";

import { ZipCodeFormComponent } from './zip-code-form/zip-code-form.component';
import { ConfirmAddressComponent } from './confirm-address/confirm-address.component';

const deliveryRoutes: Routes = [
    { path: '', component: ZipCodeFormComponent },
    { path: 'confirmaddress', component: ConfirmAddressComponent }
]

@NgModule({
    imports: [RouterModule.forChild(deliveryRoutes)],
    exports: [RouterModule]
})

export class DeliveryHomeRoutingModule { }
