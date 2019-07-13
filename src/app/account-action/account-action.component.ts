import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-account-action',
  templateUrl: './account-action.component.html',
  styleUrls: ['./account-action.component.css']
})
export class AccountActionComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  
  joj() {
    console.log("joj")
    this.router.navigate(['summary'])
  }

}
