import { ManualAddressComponent } from './manual-address/manual-address.component';
import { Routes, RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";

import { ZipCodeFormComponent } from './zip-code-form/zip-code-form.component';
import { ConfirmAddressComponent } from './confirm-address/confirm-address.component';

const deliveryRoutes: Routes = [
    { path: '', component: ZipCodeFormComponent },
    { path: 'confirm-address', component: ConfirmAddressComponent },
    { path: 'manual-address', component: ManualAddressComponent }
]

@NgModule({
    imports: [RouterModule.forChild(deliveryRoutes)],
    exports: [RouterModule]
})

export class DeliveryHomeRoutingModule { }
