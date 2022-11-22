
import { Component, OnInit } from '@angular/core';
import { Users } from '../users';
import { RegistrationService } from '../registration.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
[x: string]: any;
  users = new  Users;
  msg='';



  constructor( private Service: RegistrationService, private router: Router) {}
   
   

  ngOnInit(): void {
  }
  registerUsers(){
    this.Service.registerUsersFormsRemote(this.users).subscribe(
      data =>{
        console.log("respons recieved");
        this.router.navigate(['/login']);
        //this.msg= "registration successfull";
      },
      error =>{
        console.log("registration occured");
        this.msg= error.error;

      }
    

    );
      

  }


}
