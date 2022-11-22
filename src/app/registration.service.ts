import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Users } from './users';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {
  loginUrl : string;

  constructor(private http: HttpClient) { 
    this.loginUrl= 'http://localhost:8082/api/users';

  }
  public loginUsersFormsRemote(users: Users): Observable<any>{
    return this.http.post<any>(this.loginUrl.concat('/login'),users); 
}

public registerUsersFormsRemote(users: Users): Observable<any>{
  return this.http.post<any>(this.loginUrl.concat('/register'),users); 
}

}
