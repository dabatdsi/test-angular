import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employes } from 'src/app/model/employes';
import { PayBy } from 'src/app/model/pay-by';
import { Transaction } from 'src/app/model/transaction';
import { TypeTrans } from 'src/app/model/type-trans';
import { EmployesService } from 'src/app/service/employes.service';
import { TransactionService } from 'src/app/service/transaction.service';

@Component({
  selector: 'app-new-transaction',
  templateUrl:'./new-transaction.component.html',
  styleUrls: ['./new-transaction.component.css']
})
export class NewTransactionComponent implements OnInit {
  transaction : Transaction= new Transaction();
   empList : Employes [] = [] ;
   idEmplyes:number=1;
   typeTrans= TypeTrans ;
   payBy = PayBy;
   
 
  //fullName:string='';

  constructor(private transService:TransactionService ,
    private empService:EmployesService,
    private router: Router ) { }

 ngOnInit(): void {
  this.getEmployes()

 }

 getEmployes(){
  this.empService.getAllEmployes().subscribe(data =>{
    
    this.empList=data;
    console.log( this.empList);


  });

 }
 ///ajouter new transaction
 saveTrans(){
   this.transService.createTrans(this.transaction).subscribe(data =>{
     console.log(data);
     this.goToTransList();
   },
   error => console.log(error));
 }
 /// redirection vers la liste des transaction
 goToTransList(){
   this.router.navigate(['transaction']);
  

 }

 onSubmit(){
   console.log(this.transaction);
   this.saveTrans()
   
 }
 onSelectEmp(idEmployes: Number){
  this.transService['getData'](idEmployes)
   this.transaction.dataForm.value.code = 1

}

onChange(event: any){
 console.log(event.target.value);
}
onChangeStatus(event:any){
  console.log(event.target.value);

}
onChangePay(event:any){
  console.log(event.target.value);

}


 }



