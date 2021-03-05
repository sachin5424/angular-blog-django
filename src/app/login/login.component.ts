import { Component, OnInit } from '@angular/core';
import {FormControl, Validators,FormGroup} from '@angular/forms';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email = new FormControl('', [Validators.required, Validators.email]);

  constructor(private _userservice:UserService) { }

  ngOnInit(): void {
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
    this._userservice.user_token(this.logform.value).subscribe((result)=>{
      console.log(result);
      
    })
  }

}
