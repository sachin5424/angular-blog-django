import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AdminService } from '../admin.service';



@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  
 
})
export class DashboardComponent implements OnInit {
 

 
  constructor(private _adminService:AdminService) { }

  ngOnInit(): void {
 
  }
} 