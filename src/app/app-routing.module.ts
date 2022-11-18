import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployesListComponent } from './component/employesList/employesList.component';
import { UpdateEmployesComponent } from './component/update-employes/update-employes.component';
import { CreateEmployesComponent } from './component/create-employes/create-employes.component';
import { EmployesDetailsComponent } from './component/employes-details/employes-details.component';
import { LoginComponent } from './login/login.component';
import { LoginsuccessComponent } from './loginsuccess/loginsuccess.component';

const routes: Routes = [
  { path:'employes', component: EmployesListComponent },
  {path:'create-employes',component: CreateEmployesComponent},
  {path: '',redirectTo:'login',pathMatch:'full'},
  {path: 'update-employes/:id', component: UpdateEmployesComponent},
  {path: 'employes-details/:id', component: EmployesDetailsComponent},
  {path: '' ,component:LoginComponent},
  {path: 'loginsuccess' ,component:LoginsuccessComponent}

  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
