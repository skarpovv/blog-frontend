import { Injectable } from '@angular/core';
import { ApiService } from '../api/api.service';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';

export interface Post {
  _id: string;
  title: string;
  content: string;
}

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private _api: ApiService, private _http: HttpClient) { }

  getAllBlogs(): Observable<any> {
    return this._http.get(this._api.blogs).pipe(
      catchError((error: any) => throwError(() => ({ message: 'Error getting all posts' })))
    );
  }

  getBlogById(id: string): Observable<any> {
    return this._http.get(this._api.getBlogById(id)).pipe(
      catchError((error: any) => throwError(() => ({ message: 'Error getting post' })))
    );
  }

  getUserBlogs(userId: string): Observable<any> {
    return this._http.get(this._api.getUserBlogs(userId)).pipe(
      catchError((error: any) => throwError(() => ({ message: 'Error getting user posts' })))
    );
  }

  createBlog(postData: any): Observable<any> {
    return this._http.post(this._api.createBlog(), postData).pipe(
      catchError((error: any) => throwError(() => ({ message: 'Error creating post' })))
    );
  }

  deleteBlog(id: string): Observable<any> {
    return this._http.delete(this._api.deleteBlog(id)).pipe(
      catchError((error: any) => throwError(() => ({ message: 'Error deleting post' })))
    );
  }

  updateBlog(id: string, postData: any): Observable<any> {
    return this._http.put(this._api.updateBlog(id), postData).pipe(
      catchError((error: any) => throwError(() => ({ message: 'Error updating post' })))
    );
  }

  searchBlogs(query: string): Observable<any> {
    return this._http.get(this._api.searchBlogs(query)).pipe(
      catchError((error: any) => throwError(() => ({ message: 'Error searching posts' })))
    );
  }
}
