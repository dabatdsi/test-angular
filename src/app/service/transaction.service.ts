import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Transaction } from '../model/transaction';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {
  [x: string]: any;

  transUrl : string;
  
  

  constructor( private httpClient : HttpClient) {

    this.transUrl = 'http://localhost:8082/api/transaction';
    
  
   }

    getAllTransaction(): Observable<Transaction[]>{
    
    return this.httpClient.get<Transaction[]>(this.transUrl.concat('/all'));

   }

   createTrans( transaction : Transaction):Observable<Object>{
    return this.httpClient.post<Transaction>(this.transUrl.concat('/save'),transaction);
   }

   getTransactionById(id: number): Observable<Transaction>{ 
    return this.httpClient.get<Transaction>(this.transUrl.concat('/',`${id}`));


   }
    updateTrans(id: number,transaction: Transaction):Observable<Object>{
    return this.httpClient.put<Transaction>(this.transUrl.concat('/update/',`${id}`),transaction);
   } 
   
   
   
}
