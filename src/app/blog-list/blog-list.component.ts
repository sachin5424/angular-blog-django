import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.css']
})
export class BlogListComponent implements OnInit {
  Blog_list:any=[]
  Blog_backgroud_images:any
  panelOpenState:boolean = false
  constructor(private _userService:UserService) { }

  ngOnInit(): void {
    this._userService.blog_list().subscribe((result:any)=>{
     this.Blog_list = result
   
     
    })
  }

}
