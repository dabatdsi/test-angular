import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employes } from '../model/employes';
import { HttpClient,HttpClientModule } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class EmployesService {
  employesUrl : string;

 

  constructor( private httpClient : HttpClient) {

    this.employesUrl = 'http://localhost:8082/api/employes';
   }

   getAllEmployes(): Observable<Employes[]>{
    return this.httpClient.get<Employes[]>(this.employesUrl.concat('/all'));

   }

   createEmployes( employes : Employes):Observable<Object>{
    return this.httpClient.post<Employes>(this.employesUrl.concat('/save'),employes);
   }
   /* editEmployes( emp : Employes):Observable<Employes>{
    return this.http.post<Employes>(this.employeUrl.concat('/update/{id}'),emp);
   } */
   
   

   /*  updateEmployes( emp : Employes):Observable<Employes>{
    return this.httpClient.put<Employes>(this.employesUrl,emp);
   } */
}
