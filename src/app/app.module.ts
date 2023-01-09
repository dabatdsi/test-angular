import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployesListComponent } from './component/employesList/employesList.component';
import { EmployesService } from './service/employes.service';
import { CreateEmployesComponent } from './component/create-employes/create-employes.component';
import { UpdateEmployesComponent } from './component/update-employes/update-employes.component';
import { EmployesDetailsComponent } from './component/employes-details/employes-details.component';
import { NewTransactionComponent } from './transcomponent/new-transaction/new-transaction.component';
import { RouterModule, Routes } from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { TransDetailsComponent } from './transcomponent/trans-details/trans-details.component';
import { TransactionComponent } from './transcomponent/transaction/transaction.component';





 


 



@NgModule({
  declarations: [
    AppComponent,
    EmployesListComponent,
    CreateEmployesComponent,
    UpdateEmployesComponent,
    EmployesDetailsComponent,
    NewTransactionComponent,
    FooterComponent,
    HeaderComponent,
    TransDetailsComponent,
    TransactionComponent,

  
   
    
    
    
    
  ],

  imports: [
    RouterModule,
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,   
    ReactiveFormsModule ,
    HttpClientModule,
    
 
  ],

  providers: [EmployesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
