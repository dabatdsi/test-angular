import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Transaction } from 'src/app/model/transaction';
import { TransactionService } from 'src/app/service/transaction.service';

@Component({
  selector: 'app-trans-details',
  templateUrl: './trans-details.component.html',
  styleUrls: ['./trans-details.component.css']
})
export class TransDetailsComponent implements OnInit {
  id: number=1;
  transaction: Transaction= new Transaction();
  
  constructor( private route: ActivatedRoute , private transactionService: TransactionService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.transaction = new Transaction();
    this.transactionService.getTransactionById(this.id).subscribe(data =>{
      this.transaction=data;
      

    });
  }
  
}
