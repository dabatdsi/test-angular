import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employes } from 'src/app/model/employes';
import { Transaction } from 'src/app/model/transaction';
import { TransactionService } from 'src/app/service/transaction.service';

@Component({
  selector: 'app-new-transaction',
  templateUrl:'./new-transaction.component.html',
  styleUrls: ['./new-transaction.component.css']
})
export class NewTransactionComponent implements OnInit {
  transaction : Transaction= new Transaction();
  //fullName:string='';

  constructor(private transService:TransactionService ,
    private router: Router ) { }

 ngOnInit(): void {


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
   this.router.navigate(['/transaction']);
  

 }

 onSubmit(){
   console.log(this.transaction);
   this.saveTrans()
   
 }


}
