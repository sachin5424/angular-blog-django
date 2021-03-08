import { Component, OnInit } from '@angular/core';
import { AuthGuard } from '../auth.guard';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  logout:any
  
  constructor(private auth:AuthGuard) { }

  ngOnInit(): void {

  }
   get userlogin(){
     return this.auth.userlogin
   }
 

}
