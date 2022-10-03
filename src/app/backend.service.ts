import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable,of} from 'rxjs'
import { Login } from './login';
import {  Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class BackendService {
  isAdmin:boolean=false
  isLoggedIn:boolean=false
  constructor(private http:HttpClient,private router:Router) { }
  getLogin(login:Login):Observable<any>{
    if(login.userName.includes("admin")){
      this.isAdmin=!this.isAdmin
      this.isLoggedIn=!this.isLoggedIn
      console.log("ad",this.isAdmin,"user",this.isLoggedIn)
      return of({suc:true})
    }else{
      this.isLoggedIn=!this.isLoggedIn
      console.log("ad",this.isAdmin,"user",this.isLoggedIn)
      return of({suc:true})
    }
   
  }
  getLoginTest(email:string,password:string):boolean{
    if(email==="falana@gmail.com" && password==="123@"){
      return true
    }else{
      return false
    }
  }
  getLogout(){
    if(this.isAdmin){
      this.isAdmin=!this.isAdmin
    }
    this.isLoggedIn=!this.isLoggedIn
    console.log("ad",this.isAdmin,"user",this.isLoggedIn)
    this.router.navigate(['/login'])
  }
}
