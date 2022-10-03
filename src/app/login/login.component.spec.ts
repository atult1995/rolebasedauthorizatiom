import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from '../app-routing.module';
import { AppComponent } from '../app.component';
import { BackendService } from '../backend.service';
import { LoginComponent } from './login.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('AppComponent', () => {
  beforeAll(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientTestingModule 
      ],
      declarations: [
        AppComponent
      ],providers:[BackendService]
    }).compileComponents();
  });
  it("Login success",()=>{
    var compo=TestBed.createComponent(LoginComponent).debugElement.componentInstance
    compo.userNameTest="falana@gmail.com"
    compo.userPasswordTest="123@"
    compo.onLoginSubmit()
    expect(compo.backend.isLoggedIn).toBe(true)
    })
    
});

// function add(a:any,b:any){
//   return a+b
// }
// function square(n:any){
//   return n*n
// }
// it("My Sample test cases",()=>{
//   var actualResult=add(10,20)
//   var expectedResult=30
//   expect(actualResult).toBe(expectedResult)
// })
// it("My square test case",()=>{
//   var actualResult=square(4)
//   var expectedResult=16
//   expect(actualResult).toBe(expectedResult)
// })

