import { RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";


const appRoutes = [
    { path: '', loadChildren: './delivery-home/delivery-home.module#DeliveryHomeModule' }
]

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes, {useHash: true }),
    ],
    exports: [
        RouterModule
    ]
})

export class AppRoutingModule {}