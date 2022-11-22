import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegistrationService } from '../registration.service';
import { Users } from '../users';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 users = new Users;
 msg='';
 /*
password : string | undefined;
email !: string;
incorrect=false; */

  constructor( private service: RegistrationService, private router: Router) {      
    
  }

  ngOnInit(): void {
  }
  loginUsers(){
    console.log(this.users)
    this.service.loginUsersFormsRemote(this.users).subscribe(
      data =>{console.log("reponse recu");
      this.router.navigate(['/loginsuccess']);
      
    },
      error=>{
        console.log("execption accorder");
       this.msg='identifiant incorrect, svp entrer une adresse email et/ou  un password valide'

    })

    }
    gotoregistration(){
      this.router.navigate(["/registration"]);
    }
      

  }


