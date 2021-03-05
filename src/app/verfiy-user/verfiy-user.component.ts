import { Component, OnInit,OnDestroy,Input } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { UserService } from '../user.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-verfiy-user',
  templateUrl: './verfiy-user.component.html',
  styleUrls: ['./verfiy-user.component.css']
})
export class VerfiyUserComponent implements OnInit{
  
  @Input () item:any
  constructor(private _userservice:UserService,private _route:Router) { }

  ngOnInit(): void {
    console.log(this.item);
    console.log(sessionStorage.getItem('email'));
    if(sessionStorage.getItem('email')==null){
      this._route.navigate(['/register'])
    }
   
 
  }
  verfyFrom=new FormGroup({
    email:new FormControl(''),
    otp:new FormControl('')
  })
  onsubmit(){
    const getEmail = localStorage.getItem('email')
    this.verfyFrom.value.email= sessionStorage.getItem('email')
    this.verfyFrom.value.otp=parseInt(this.verfyFrom.value.otp)
    console.log(this.verfyFrom.value);
    this._userservice.user_verfiy(this.verfyFrom.value).subscribe((data)=>{
      console.log(data);
      
      this.OnDestroy()
      this._route.navigate(['/log'])
   
      
    })
 
     
  }
  OnDestroy(){
    sessionStorage.removeItem('email')

  }
}
