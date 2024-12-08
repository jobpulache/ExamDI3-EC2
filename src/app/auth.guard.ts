import { CanActivateFn } from '@angular/router';
import { inject } from '@angular/core';
import { Router } from '@angular/router';

const isAuthenticated = () => {
    return sessionStorage.getItem('auth') === 'true';
};

export const authGuard: CanActivateFn = () => {
    const router = inject(Router);
    if (!isAuthenticated()) {
        router.navigate(['/login']);
        return false;  
        
    }
    return true;  
    
};
