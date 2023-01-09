import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { Transaction } from 'src/app/model/transaction';
import { TransactionService } from 'src/app/service/transaction.service';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css']
})
export class TransactionComponent implements OnInit {
  transList : Transaction [] = [] ;


  constructor(private  formBuilder:FormBuilder,private transService : TransactionService,
    private router : Router ){ }
   
  
    ngOnInit(): void {
      this.getTransaction();
    }
     getTransaction(){
      this.transService.getAllTransaction().subscribe(data =>{
        this.transList=data;
       console.log(this.transList)
  
      });
  
     }
     newTransaction(id: number){
      this.router.navigate(['new-transaction']);
  
    }   
     transDetails(id: number){
      this.router.navigate(['trans-details',id]);
    } 
    }
    
  
    
 
