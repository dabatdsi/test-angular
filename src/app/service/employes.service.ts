import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employes } from '../model/employes';
import { HttpClient,HttpClientModule } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class EmployesService {
  addEmpURL : string;
  getEmpURL : string;
  editEmpURL: string;

 

  constructor( private http : HttpClient) {

    this.addEmpURL = 'http://localhost:8082/emp/addEmployee';
    this.getEmpURL = 'http://localhost:8082/emp/getAll';
    this.editEmpURL = 'http://localhost:8082/emp/editEmployee';
   }

   addEmployee( emp : Employes):Observable<Employes>{
    return this.http.post<Employes>(this.addEmpURL,emp);
   }
   getAllEmployes(): Observable<Employes[]>{
    return this.http.get<Employes[]>(this.getEmpURL);

   }
    editEmployee( emp : Employes):Observable<Employes>{
    return this.http.post<Employes>(this.addEmpURL,emp);
   }
}
