import { Router, Routes } from '@angular/router';
import { PipesComponent } from './pipes/pipes.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { LoginComponent } from './login/login.component';
import { inject } from '@angular/core';
import { authGuard } from './auth.guard';  

const isAuthenticated = () => {
    return sessionStorage.getItem('auth') === 'true';
};

export const routes: Routes = [
    { path: "pipes", component: PipesComponent },
    { path: "home", component: HomeComponent },
    { path: "profile", component: ProfileComponent, canActivate: [authGuard] },  
    { path: "login", component: LoginComponent }
];
