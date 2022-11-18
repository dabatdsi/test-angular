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
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { LoginsuccessComponent } from './loginsuccess/loginsuccess.component';
 

@NgModule({
  declarations: [
    AppComponent,
    EmployesListComponent,
    CreateEmployesComponent,
    UpdateEmployesComponent,
    EmployesDetailsComponent,
    LoginComponent,
    RegistrationComponent,
    LoginsuccessComponent,
  
   
   
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule ,
    HttpClientModule
  ],
  providers: [EmployesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
