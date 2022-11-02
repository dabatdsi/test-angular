import { Component, OnInit } from '@angular/core';
import { FormGroup , FormBuilder,FormControl } from '@angular/forms';
import { Employes } from 'src/app/model/employes';
import { EmployesService } from 'src/app/service/employes.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  empDetail !:FormGroup;
  empObj : Employes = new Employes();
  empList : Employes [] = [] ;
 


  constructor(private  formBuilder : FormBuilder,private empService : EmployesService) { }

  ngOnInit(): void {
    this.getAllEmployes();
    this.empDetail = this.formBuilder.group({
      frirtName :[''],
      lastName :[''],
      adress :[''],
      email:[''],
      cni :[''],
      phoneNumber :[''],
      posteOccupe :['']

    });
    
  }
  addEmployee(){
    console.log(this.empDetail);
    this.empObj.idEmployes =this.empDetail.value.idEmployes;
    this.empObj.firstName =this.empDetail.value.firstName;
    this.empObj.lastName =this.empDetail.value.lastName;
    this.empObj.adress =this.empDetail.value.adress;
    this.empObj.email =this.empDetail.value.email;
    this.empObj.cin =this.empDetail.value.cni;
    this.empObj.phoneNumber =this.empDetail.value.phoneNumber;
    this.empObj.posteOccupe =this.empDetail.value.posteOccupe;

   this.empService.addEmployee(this.empObj).subscribe(res =>{
      console.log(res);
      this.getAllEmployes();
    }, err=>{
      console.log(err);

    });

  }
     getAllEmployes(){
      this.empService.getAllEmployes().subscribe(res=>{
        this.empList=res;

      },err=>{
        console.log("erreur lors de la lecture des données");

      });


     }
}