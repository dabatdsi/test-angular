import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployesListComponent } from './component/employesList/employesList.component';
import { EmployesService } from './service/employes.service';
import { CreateEmployesComponent } from './create-employes/create-employes.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployesListComponent,
    CreateEmployesComponent,
    
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
