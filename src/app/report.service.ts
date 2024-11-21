import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ApiRespond, Welcome } from './module';

@Injectable({
  providedIn: 'root'
})
export class ReportService {

  constructor(private http:HttpClient) { }

  postUrl="https://projectapi.gerasim.in/api/Loan/AddNewApplication"

AddNewApplication(obj:Welcome):Observable<ApiRespond>{
  return this.http.post<ApiRespond>(this.postUrl,obj)
}
}
