import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  url = 'http://localhost:8000/api/'
  constructor(private http:HttpClient) { }

  categories_add(data:any){
    return this.http.post(this.url+'categorie-create',data)
  }
  categories_list(){
    return this.http.get(this.url+'categorie-list')
  }
  categories_update(id:any,data:any){

    return this.http.put(this.url+'categorie/'+id,data)
  }

  categories_delete(id:any){

    return this.http.delete(this.url+'categorie/'+id)
  }


  // blog
  blog_add(data:any){
    return this.http.post(this.url+'blog-create',data)
  }

  blog_list(){
    return this.http.get(this.url+'blog-list')
  }

  blog_update(id:any,data:any){
    return this.http.put(this.url+'blog/'+id,data)
  }
  blog_delete(id:any){
    return this.http.delete(this.url+'blog/'+id)
  }


}
