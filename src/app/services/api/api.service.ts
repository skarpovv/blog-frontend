import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private readonly _baseApi = 'https://blog-api-y59o.onrender.com';
  private readonly _localhost = 'http://localhost:3001';

  get register(): string {
    return `${this._authRoute}/auth/register`
  }
  get login(): string {
    return `${this._baseApi}/auth/login`
  }

  get users(): string {
    return `${this._baseApi}/users`;
  }

  getUserById(id: string): string {
    return `${this._baseApi}/users/${id}`;
  }

  get me(): string {
    return `${this._baseApi}/users/me`;
  }

  // Blogs endpoints
  get blogs(): string {
    return `${this._baseApi}/blogs`;
  }
  getBlogById(id: string): string {
    return `${this._baseApi}/blogs/${id}`;
  }
  getUserBlogs(id: string): string {
    return `${this._baseApi}/users/${id}/blogs`
  }
  createBlog(): string {
    return `${this._baseApi}/blogs`;
  }
  updateBlog(id: string): string {
    return `${this._baseApi}/blogs/${id}`;
  }
  deleteBlog(id: string): string {
    return `${this._baseApi}/blogs/${id}`;
  }
  searchBlogs(query: string): string {
    return `${this._baseApi}/blogs/search?query=${query}`;
  }

  //comments
  get comments(): string {
    return `${this._baseApi}/comments`;
  }
  getCommentsByBlog(blogId: string): string {
    return `${this._baseApi}/blogs/${blogId}/comments`;
  }
  createComment(): string {
    return `${this._baseApi}/comments`;
  }
  updateComment(commentId: string): string {
    return `${this._baseApi}/comments/${commentId}`;
  }
  deleteComment(commentId: string): string {
    return `${this._baseApi}/comments/${commentId}`;
  }

  private get _authRoute(): string {
    return `${this._baseApi}/auth`
  }
}
