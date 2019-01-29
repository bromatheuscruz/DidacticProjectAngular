import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  
  @Input() productName: string;
  @Input() description: string;
  @Input() oldPrice: string;
  @Input() currentPrice: string;
  @Input() img: string;

  constructor() { }

  ngOnInit() {
  }

}
