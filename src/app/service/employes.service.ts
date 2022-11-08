import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employes } from '../model/employes';
import { HttpClient,HttpClientModule } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class EmployesService {
  employeUrl : string;

 

  constructor( private http : HttpClient) {

    this.employeUrl = 'http://localhost:8082/api/employes';
   }

   addEmployes( emp : Employes):Observable<Employes>{
    return this.http.post<Employes>(this.employeUrl.concat('/save'),emp);
   }
   /* editEmployes( emp : Employes):Observable<Employes>{
    return this.http.post<Employes>(this.employeUrl.concat('/update/{id}'),emp);
   } */
   
   getAllEmployes(): Observable<Employes[]>{
    return this.http.get<Employes[]>(this.employeUrl.concat('/all'));

   }

    updateEmployes( emp : Employes):Observable<Employes>{
    return this.http.put<Employes>(this.employeUrl,emp);
   }
}
