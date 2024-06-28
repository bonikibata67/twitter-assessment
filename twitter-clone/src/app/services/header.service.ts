import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { user } from '../models';


@Injectable({
  providedIn: 'root'
})
export class HeaderService {
  

  constructor(private http: HttpClient) { }

  private readonly baseUrl: string = 'https://jsonplaceholder.typicode.com/users'

  getusers(): Observable<user[]> {
    return this.http.get<user[]>(this.baseUrl);
  }

  getuser(id: string): Observable<user> {
    return this.http.get<user>(`${this.baseUrl}/${id}`);
  }
}
