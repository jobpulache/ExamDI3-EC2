import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'] 
})
export class LoginComponent {

  username: string = '';
  password: string = '';

  constructor(private router: Router) {}

  login() {
    if (this.username === 'JobManuDL' && this.password === '123') {
      sessionStorage.setItem('auth', 'true');
      sessionStorage.setItem('username', this.username);

      this.router.navigate(['/profile']);
    } else {
      alert('Usuario o contraseña incorrectos');
    }
  }
}
