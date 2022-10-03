import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BackendService } from '../backend.service';
import { Login } from '../login';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm:FormGroup
  login:Login=new Login()
  userNameTest:string=""
  userPasswordTest:string=""
   constructor(public backend:BackendService,
   private router:Router
    ) { }

  ngOnInit(): void {
    this.loginForm=new FormGroup({
      userName:new FormControl(null,Validators.required),
      userPassword:new FormControl(null,Validators.required)
    })
    
  }
  onLoginSubmit(){
    if(this.loginForm.valid){
      this.login.userName=this.loginForm.get('userName').value
      this.login.userPassword=this.loginForm.get('userPassword').value
      this.backend.getLogin(this.login).subscribe({
        next:(res)=>{
          if(res.suc===true){
            this.router.navigate(['/dashboard'])
          }
        },
        error:(e)=>{}
      })
    }
      // if(this.backend.getLoginTest(this.userNameTest,this.userPasswordTest)===true){
      //   this.backend.isLoggedIn=true
      // }else{
      //   this.backend.isLoggedIn=false;
      // }
    
  }

}
