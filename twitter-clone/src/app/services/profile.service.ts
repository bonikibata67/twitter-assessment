import { Injectable } from '@angular/core';
import { user } from '../models';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  baseUrl = "https://jsonplaceholder.typicode.com/users"
  // http: HttpClient 

  constructor(private http: HttpClient) { }

  getusers(): Observable<user[]> {
    return this.http.get<user[]>(this.baseUrl);
  }

  getuser(id: string): Observable<user> {
    return this.http.get<user>(`${this.baseUrl}/${id}`);
  }


}
