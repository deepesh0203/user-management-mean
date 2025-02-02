import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiURL="http://localhost:3000/api/users";


  constructor(private http:HttpClient) {}
  getusers(): Observable<any>{
    return this.http.get<any[]>(this.apiURL);
  }
  getuser(id:number): Observable<any>{
    return this.http.get<any>(`${this.apiURL}/${id}`);
    }
  adduser(user:any):Observable<any>{
    return this.http.post<any>(this.apiURL,user)
  }
  updateuser(id:number,user:any): Observable<any>{
    return this.http.put<any>(`${this.apiURL}/${id}`,user);
    }
  patchuser(id:number,user:any): Observable<any>{
      return this.http.patch<any>(`${this.apiURL}/${id}`,user);
      }
  deleteuser(id:number): Observable<any>{
      return this.http.delete<any>(`${this.apiURL}/${id}`);
   }
}
