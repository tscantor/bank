import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})
export class SummaryComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  joj() {
    console.log("joj")
    this.router.navigate(['account-action'])
  }
}
