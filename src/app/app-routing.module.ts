import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployesListComponent } from './component/employesList/employesList.component';
import { CreateEmployesComponent } from './create-employes/create-employes.component';

const routes: Routes = [
  { path:'employes', component: EmployesListComponent },
  {path:'create-employes',component:CreateEmployesComponent},
  {path : '',redirectTo:'employes',pathMatch:'full'}
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
