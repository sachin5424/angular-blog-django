import { HttpHandler, HttpHeaders, HttpInterceptor, HttpParams, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";


@Injectable()
export class auth implements HttpInterceptor{
    constructor(){

    }
    intercept(req:HttpRequest<any>,next:HttpHandler){ 
        var Bearer ="Bearer "
        var token= localStorage.getItem('token')
        var auth = Bearer+token
        console.log(auth);
        
       const user = new HttpHeaders({
        'Authorization':`${auth}`,
       })
       const header = req.clone({headers:user})
        return next.handle(header);

    }

}