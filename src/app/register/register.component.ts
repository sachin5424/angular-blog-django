import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  email_id = new FormControl('', [Validators.required, Validators.email]);
  hide = true;
  data:any
  verfiy_email=false
  verfiy_email_sent:string | undefined
  errormess_username:string | undefined
  errormess_email:string | undefined
  errormess_password:string | undefined
 
  registerForm= new FormGroup({
    first_name:new FormControl(''),
    last_name:new FormControl(''),
    username:new FormControl('',[Validators.required]),
    email:new FormControl(''),
    password:new FormControl('',[Validators.required])

  }) 
  constructor(private _userservice:UserService,private _route:Router) { }

  ngOnInit(): void {
  
  }
  getErrorMessage() {
    if (this.email_id.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email_id.hasError('email') ? 'Not a valid email' : '';
  }
  onsubmit(){
    
    this.registerForm.value.email=this.email_id.value
     console.log(this.registerForm.value);
    console.log('ok',this.email_id.value);
    this._userservice.Register(this.registerForm.value).subscribe(data=>{
      console.log(data);
      this.data=data
      sessionStorage.setItem('email',this.data.email)
      this.verfiy_email_sent=this.registerForm.value.email
      this._route.navigate(['/verfiy-user'])
      
    },
    (error:any)=>{
      this.errormess_username=error.error.username
      this.errormess_email=error.error.email
      this.errormess_password=error.error.password
     

    }
    )
    
  }

}
