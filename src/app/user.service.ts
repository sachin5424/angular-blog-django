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
  blog_details(id:string){
    return this.http.get(this.url+'blog-details/'+id)
  }

  Register(data:any){
    return this.http.post(this.url+'user',data)
  }
  user_verfiy(data:any){
    return this.http.post('http://localhost:8000/api/user-verfiy',data)
  }
  user_token(data:any){
    return this.http.post(this.url+'token/',data)
  }
}
