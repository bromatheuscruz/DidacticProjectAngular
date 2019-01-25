import { CarteComponent } from './carte/carte.component';
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";

const menuRoutes = [
    { path: '', component: CarteComponent }
]


@NgModule({
    imports: [RouterModule.forChild(menuRoutes)],
    exports: [RouterModule]
})
export class MenuRoutingModule { }