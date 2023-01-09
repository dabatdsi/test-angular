import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployesListComponent } from './component/employesList/employesList.component';
import { UpdateEmployesComponent } from './component/update-employes/update-employes.component';
import { CreateEmployesComponent } from './component/create-employes/create-employes.component';
import { EmployesDetailsComponent } from './component/employes-details/employes-details.component';
//import { LoginComponent } from './login/login.component';
import { TransactionComponent } from './transcomponent/transaction/transaction.component';
import { NewTransactionComponent } from './transcomponent/new-transaction/new-transaction.component';
import { FooterComponent } from './footer/footer.component';
import { AppComponent } from './app.component';
//import { RegistrationComponent } from './registration/registration.component';
import { HeaderComponent } from './header/header.component';
import { TransDetailsComponent } from './transcomponent/trans-details/trans-details.component';


const routes: Routes = [
  {path:'',component:AppComponent},
  { path:'employes', component: EmployesListComponent },
  {path:'create-employes',component: CreateEmployesComponent},
  {path: '',redirectTo:'employesList',pathMatch:'full'},
  //{path : 'login',component:LoginComponent},
  {path: 'update-employes/:id', component: UpdateEmployesComponent},
  {path: 'employes-details/:id', component: EmployesDetailsComponent},
  //{path: '' ,component:LoginComponent},
  {path:'transaction',component:TransactionComponent},
  {path:'new-transaction',component:NewTransactionComponent},
  {path: 'footer',component:FooterComponent},
  //{path:'registration',component:RegistrationComponent},
  {path:'header',component:HeaderComponent},
  {path:'employesList',component:EmployesListComponent},
  {path:'trans-details/:id',component:TransDetailsComponent},



  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
