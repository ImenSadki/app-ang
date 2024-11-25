import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  template: `
    <div class="container mt-5">
      <div class="row justify-content-center">
        <div class="col-md-6">
          <div class="card">
            <div class="card-header">Connexion</div>
            <div class="card-body">
              <form (ngSubmit)="onLogin()">
                <div class="mb-3">
                  <label for="email" class="form-label">Email</label>
                  <input 
                    type="email" 
                    class="form-control" 
                    id="email" 
                    [(ngModel)]="email" 
                    name="email" 
                    required
                  >
                </div>
                <div class="mb-3">
                  <label for="password" class="form-label">Mot de passe</label>
                  <input 
                    type="password" 
                    class="form-control" 
                    id="password" 
                    [(ngModel)]="password" 
                    name="password" 
                    required
                  >
                </div>
                <button type="submit" class="btn btn-primary">Se connecter</button>
              </form>
              <p class="mt-3">
                Pas de compte ? <a routerLink="/register">S'inscrire</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  styleUrl: './login.component.css'
})
export class LoginComponent {
  email: string = '';
  password: string = '';

  onLogin() {
    console.log('Tentative de connexion', this.email);
    // Logique d'authentification
  }
}