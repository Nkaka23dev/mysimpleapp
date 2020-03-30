import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
 public _url="/assets/data/employee.json";
  constructor(private http:HttpClient) { }

getEmployee():Observable<any[]>{
  return this.http.get<any[]>(this._url);
  
}
}
