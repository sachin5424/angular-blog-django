import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  url = 'http://localhost:8000/api/'
  constructor(private http:HttpClient) { }

  blog_list(){
    return this.http.get(this.url+'blog-list')
  }
}
