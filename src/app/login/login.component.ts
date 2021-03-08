import { Component, OnInit } from '@angular/core';
import {FormControl, Validators,FormGroup} from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email = new FormControl('', [Validators.required, Validators.email]);

  constructor(
    private _userservice:UserService,
    private _router:Router
    ) { }

  ngOnInit(): void {
    localStorage.removeItem('token')
  }
 
  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }
  logform=new FormGroup({
    username:new FormControl(''),
    password:new FormControl('')
  })
  onSubmit(){
    console.log(this.logform.value);
    this._userservice.user_token(this.logform.value).subscribe((result:any)=>{
      console.log(result);
      localStorage.setItem('token',result.access)
      this._router.navigate(['/'])
    })
  }

}
