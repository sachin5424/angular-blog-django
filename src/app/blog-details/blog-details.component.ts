import { Component, OnInit } from '@angular/core';
import {ActivatedRoute,ParamMap,Route,Router} from '@angular/router'
import { UserService } from '../user.service';
@Component({
  selector: 'app-blog-details',
  templateUrl: './blog-details.component.html',
  styleUrls: ['./blog-details.component.css']
})
export class BlogDetailsComponent implements OnInit {
  id:any
  blog_details:any={}
  constructor(private _activatedRoute:ActivatedRoute,private _userService:UserService) { }

  ngOnInit(): void {
    this.id= this._activatedRoute.snapshot.paramMap.get('id')
    console.log(this.id);
    this._userService.blog_details(this.id).subscribe(
      (result:any)=>{
        this.blog_details=result
        console.log(this.blog_details);
        
        
      }
    )
    
  }

}
