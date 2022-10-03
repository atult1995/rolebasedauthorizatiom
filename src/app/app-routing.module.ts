import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { DashboardComponent } from './dashboard/dashboard.component';
import { GallaryComponent } from './gallary/gallary.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [{path:"dashboard",component:DashboardComponent,canActivate:[AuthGuard]},
{path:"",redirectTo:"login",pathMatch:"full"},{path:"login",component:LoginComponent},
{path:"gallary",component:GallaryComponent,canActivate:[AuthGuard]},
{path:"**",redirectTo:"login"},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
