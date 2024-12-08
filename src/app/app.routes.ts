import { Router, Routes } from '@angular/router';
import { PipesComponent } from './pipes/pipes.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './auth.guard';  

export const routes: Routes = [
  { path: "pipes", component: PipesComponent },
  { path: "home", component: HomeComponent },
  { path: "profile", component: ProfileComponent, canActivate: [AuthGuard] },  
  { path: "login", component: LoginComponent }
];
