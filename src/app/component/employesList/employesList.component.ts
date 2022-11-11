import { Component, OnInit } from '@angular/core';
import { FormGroup , FormBuilder,FormControl } from '@angular/forms';
import { Employes } from 'src/app/model/employes';
import { EmployesService } from 'src/app/service/employes.service';

@Component({
  selector: 'app-employesList',
  templateUrl: './employesList.component.html',
  styleUrls: ['./employesList.component.css']
})
export class EmployesListComponent implements OnInit {

  empList : Employes [] = [] ;
 


  constructor(private  formBuilder : FormBuilder,private empService : EmployesService) { }

  ngOnInit(): void {
    this.getEmployes();
  }
   getEmployes(){
    this.empService.getAllEmployes().subscribe(data =>{
      this.empList=data;

    });

  }
    /* this.getAllEmployes();
    
    this.empDetail = this.formBuilder.group({
      idEmployee:[''],
      frirtName :[''],
      lastName :[''],
      adress :[''],
      email:[''],
      cni :[''],
      phoneNumber :[''],
      postOccupe :['']

    }); */
    
  }
  
  /* addEmployes(){
    console.log(this.empDetail.value);
    this.empObj.idEmployes =this.empDetail.value.idEmployes;
    this.empObj.firstName =this.empDetail.value.firstName;
    this.empObj.lastName =this.empDetail.value.lastName;
    this.empObj.adress =this.empDetail.value.adress;
    this.empObj.email =this.empDetail.value.email;
    this.empObj.cni =this.empDetail.value.cni;
    this.empObj.phoneNumber =this.empDetail.value.phoneNumber;
    this.empObj.postOccupe =this.empDetail.value.postOccupe;
  

   this.empService.addEmployes(this.empObj).subscribe(res =>{
      console.log(res);
      this.getAllEmployes();
    }, err=>{
      console.log(err);

    });

  } */
     

   /*

     editEmployes(emp : Employes){
      this.empDetail.controls['idEmployes'].setValue(emp.idEmployes);
      this.empDetail.controls['firstName'].setValue(emp.firstName);
      this.empDetail.controls['lastName'].setValue(emp.lastName);
      this.empDetail.controls['adress'].setValue(emp.adress);
      this.empDetail.controls['email'].setValue(emp.email);
      this.empDetail.controls['cni'].setValue(emp.cni);
      this.empDetail.controls['phoneNumber'].setValue(emp.phoneNumber);
      this.empDetail.controls['posteOccupe'].setValue(emp.postOccupe);

     }
     updateEmploye(){
      this.empObj.idEmployes =this.empDetail.value.idEmployes;
      this.empObj.firstName =this.empDetail.value.firstName;
      this.empObj.lastName =this.empDetail.value.lastName;
      this.empObj.adress =this.empDetail.value.adress;
      this.empObj.email =this.empDetail.value.email;
      this.empObj.cni =this.empDetail.value.cni;
      this.empObj.phoneNumber =this.empDetail.value.phoneNumber;
      this.empObj.postOccupe =this.empDetail.value.postOccupe;
     }
      */
    

