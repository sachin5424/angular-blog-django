import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  User_list:any=[]
  temp=false;
  constructor(private _adminservice:AdminService) { }

  ngOnInit(): void {
  this._adminservice.user_list().subscribe(result=>{
    this.User_list=result
    console.log(this.User_list);
    

    
    
  })
  }

}
