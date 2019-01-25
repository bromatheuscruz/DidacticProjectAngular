import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  @Input() category: any;

  visibility: boolean = false;

  showProducts() {
    this.visibility = !this.visibility
    console.log(this.visibility, 'show?')
  }
  constructor() { }

  ngOnInit() {
  }



}
