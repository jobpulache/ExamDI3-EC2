import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {

  username: string | null = '';

  constructor(private router: Router) { }

  ngOnInit() {
    this.username = sessionStorage.getItem('username');  
    if (!this.username) {
      this.router.navigate(['/login']);  
    }
  }

  logout() {
    sessionStorage.removeItem('auth');
    sessionStorage.removeItem('username');  
    this.router.navigate(['/login']);
  }
}
