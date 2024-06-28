import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { comment } from '../models';

@Injectable({
  providedIn: 'root'
})
export class CommentsService {
  baseUrl = 'https://jsonplaceholder.typicode.com/comments';

  constructor(private http: HttpClient) {}

  getCommentsByPost(postId: number): Observable<comment[]> {
    return this.http.get<comment[]>(`${this.baseUrl}?postId=${postId}`);
  }
}

