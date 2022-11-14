import { Component, OnInit } from '@angular/core';
import { FormGroup , FormBuilder,FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Employes } from 'src/app/model/employes';
import { EmployesService } from 'src/app/service/employes.service';

@Component({
  selector: 'app-employesList',
  templateUrl: './employesList.component.html',
  styleUrls: ['./employesList.component.css']
})
export class EmployesListComponent implements OnInit {

  empList : Employes [] = [] ;
 


  constructor(private  formBuilder : FormBuilder,private empService : EmployesService,
  private router : Router ){ }
 

  ngOnInit(): void {
    this.getEmployes();
  }
   getEmployes(){
    this.empService.getAllEmployes().subscribe(data =>{
      this.empList=data;

    });

   }
  updateEmployes(id: number){
    this.router.navigate(['update-employes', id]);

  }  
  deleteEmployes(id: number){
    this.empService.deleteEmployes(id).subscribe(data =>{
      console.log(data);
      this.getEmployes();

    });

  }
  employesDetail(id: number){
    this.router.navigate(['employes-details', id]);
    

  }
   
    
  }
  
  
  

  
     

   
    

