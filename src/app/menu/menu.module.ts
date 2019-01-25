import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarteComponent } from './carte/carte.component';
import { MenuRoutingModule } from './menu.routing';
import { ProductComponent } from './product/product.component';
import { CategoryComponent } from './category/category.component';

@NgModule({
  imports: [
    CommonModule,
    MenuRoutingModule
  ],
  declarations: [CarteComponent, ProductComponent, CategoryComponent]
})
export class MenuModule { }
