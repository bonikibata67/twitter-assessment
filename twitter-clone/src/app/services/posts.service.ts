import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { post } from '../models';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  baseUrl = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private http: HttpClient) {}

  getPostsByUser(userId: number): Observable<post[]> {
    return this.http.get<post[]>(`${this.baseUrl}?userId=${userId}`);
  }
}

