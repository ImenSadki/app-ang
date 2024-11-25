import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink, Router } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  template: `
    <div class="container mt-5">
      <div class="row justify-content-center">
        <div class="col-md-6">
          <div class="card">
            <div class="card-header">Inscription</div>
            <div class="card-body">
              <form (ngSubmit)="onRegister()">
                <div class="mb-3">
                  <label for="username" class="form-label">Nom d'utilisateur</label>
                  <input 
                    type="text" 
                    class="form-control" 
                    id="username" 
                    [(ngModel)]="username" 
                    name="username" 
                    required
                  >
                </div>
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
                <div class="mb-3">
                  <label for="confirmPassword" class="form-label">Confirmer le mot de passe</label>
                  <input 
                    type="password" 
                    class="form-control" 
                    id="confirmPassword" 
                    [(ngModel)]="confirmPassword" 
                    name="confirmPassword" 
                    required
                  >
                </div>
                <button type="submit" class="btn btn-primary">S'inscrire</button>
              </form>
              <p class="mt-3">
                Déjà un compte ? <a routerLink="/login">Se connecter</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  username: string = '';
  email: string = '';
  password: string = '';
  confirmPassword: string = '';

  constructor(private router: Router) {}

  onRegister() {
    // Vérification de base des mots de passe
    if (this.password !== this.confirmPassword) {
      alert('Les mots de passe ne correspondent pas');
      return;
    }

    // Logique d'inscription
    console.log('Inscription', {
      username: this.username,
      email: this.email
    });

    // Vous pouvez ajouter ici votre logique d'inscription côté serveur
    // Par exemple, appel à un service d'authentification

    // Redirection après inscription (optionnel)
    this.router.navigate(['/login']);
  }
}