import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-confirm-address',
  templateUrl: './confirm-address.component.html',
  styleUrls: ['./confirm-address.component.css']
})
export class ConfirmAddressComponent implements OnInit {

  constructor(private router: Router) { }

  back() {
    this.router.navigate(['']);
  }

  ngOnInit() {
  }

}
