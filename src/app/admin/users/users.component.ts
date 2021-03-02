import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  name: string | undefined;
  position: number | undefined;
  weight: number | undefined;
  symbol: string | undefined;
  user_list:any
  ELEMENT_DATA:any =[]
  constructor(private _adminservice:AdminService) { }

  ngOnInit(): void {
  this._adminservice.user_list().subscribe(result=>{
    console.log(result);
    this.ELEMENT_DATA=result
    console.log(this.ELEMENT_DATA,'t');
    
    
  })
  }
  displayedColumns: string[] = ['id', 'email','first_name','last_name','password','username'];
  dataSource = new MatTableDataSource(this.ELEMENT_DATA);

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
