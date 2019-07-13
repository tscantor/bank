import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {

  

  }


  loginUser(event){
    event.preventDefault()
    var usi = event.target.querySelector("#username").value
    var pasi = event.target.querySelector("#password").value

    var wrong = document.getElementById('wrong');
    

    console.log(usi)
    console.log(pasi)
    if ((usi == 'joj') && (pasi == 'jen')){
      this.router.navigate(['summary'])
    } else {
      console.log("שתוק")
      wrong.style.display = "block";
      (<HTMLInputElement>document.getElementById("username")).value = "";
      (<HTMLInputElement>document.getElementById("password")).value = "";
    }
  }

  toReg(){
    console.log("joj")
    this.router.navigate(['register']);
  }
}
