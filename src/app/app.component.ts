import { Component } from '@angular/core';
import { RouterOutlet, RouterLink, RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterModule],
  template: `
    <nav class="navbar navbar-expand-lg navbar-dark fixed-top">
      <div class="container">
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse">
          <ul class="navbar-nav ms-auto">
            <li class="nav-item">
              <a class="nav-link" href="#about">À propos</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#projects">Projets</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#skills">Compétences</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#contact">Contact</a>
            </li>
            <li class="nav-item">
              <a class="nav-link btn btn-outline-light ms-3" routerLink="/login">Login</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    
    <router-outlet></router-outlet>

    <section id="hero" class="d-flex align-items-center">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-6">
            <h1>imen sadki</h1>
            <h2>Software Engineer</h2>
            <p class="lead">Je conçois et développe des expériences numériques exceptionnelles.</p>
          </div>
          <div class="col-lg-6">
            <img src="/image.png" alt="Profile" class="img-fluid rounded-circle profile-img">
          </div>
        </div>
      </div>
    </section>
  
    <section id="about" class="py-5">
      <div class="container">
        <h2 class="section-title">À propos de moi</h2>
        <div class="row align-items-center">
          <div class="col-lg-6">
            <p>Je suis une ingénieure en informatique avec une grande autonomie et une capacité d'apprentissage rapide, ce qui me permet d'acquérir de nouvelles compétences efficacement. Mon sens de l'analyse et ma rigueur me permettent d'optimiser les processus et de résoudre les défis de manière proactive.</p>
          </div>
        </div>
      </div>
    </section>
  
    <section id="projects" class="py-5">
      <div class="container">
        <h2 class="section-title">Mes Projets</h2>
        <div class="row g-4">
          <div class="col-md-4">
            <div class="card project-card">
              <img src="assets/projet1.jpg" class="card-img-top" alt="Projet 1">
              <div class="card-body">
                <h3 class="card-title">Projet 1</h3>
                <p class="card-text">Application web React et Node.js</p>
                <div class="project-links">
                  <a href="https://github.com/ImenSadki/LMS" class="btn btn-outline-primary"><i class="fab fa-github"></i> GitHub</a>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="card project-card">
              <img src="assets/projet2.jpg" class="card-img-top" alt="Projet 2">
              <div class="card-body">
                <h3 class="card-title">Projet 2</h3>
                <p class="card-text">Application de gestion des données bancaires</p>
                <div class="project-links">
                  <a href="https://github.com/ImenSadki/app" class="btn btn-outline-primary"><i class="fab fa-github"></i> Git</a>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="card project-card">
              <img src="assets/projet3.jpg" class="card-img-top" alt="Projet 3">
              <div class="card-body">
                <h3 class="card-title">Projet 3</h3>
                <p class="card-text">BI_ETL_SSIS_SSAS_Project</p>
                <div class="project-links">
                  <a href="https://github.com/ImenSadki/BI_ETL_SSIS_SSAS_Project" class="btn btn-outline-primary"><i class="fab fa-github"></i> GitHub</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  
    <section id="skills" class="py-5">
      <div class="container">
        <h2 class="section-title">Compétences</h2>
        <div class="row g-4">
          <div class="col-md-2 col-sm-4">
            <div class="skill-item">
              <i class="fab fa-html5"></i>
              <p>HTML5</p>
            </div>
          </div>
          <div class="col-md-2 col-sm-4">
            <div class="skill-item">
              <i class="fab fa-css3-alt"></i>
              <p>CSS3</p>
            </div>
          </div>
          <div class="col-md-2 col-sm-4">
            <div class="skill-item">
              <i class="fab fa-js"></i>
              <p>JavaScript</p>
            </div>
          </div>
          <div class="col-md-2 col-sm-4">
            <div class="skill-item">
              <i class="fab fa-react"></i>
              <p>React</p>
            </div>
          </div>
          <div class="col-md-2 col-sm-4">
            <div class="skill-item">
              <i class="fab fa-node"></i>
              <p>Node.js</p>
            </div>
          </div>
          <div class="col-md-2 col-sm-4">
            <div class="skill-item">
              <i class="fab fa-git-alt"></i>
              <p>Git</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  
    <section id="contact" class="py-5">
      <div class="container text-center">
        <h2 class="section-title">Contact</h2>
        <p class="lead">Vous avez un projet en tête ? Je serais ravi d'en discuter avec vous.</p>
        <a href="mailto:contact@example.com" class="btn btn-primary btn-lg">Me contacter</a>
        <div class="social-links mt-4">
          <a href="https://www.linkedin.com/in/imen-sadki-56830b226/" class="btn btn-outline-primary"><i class="fab fa-linkedin"></i></a>
          <a href="https://github.com/ImenSadki" class="btn btn-outline-primary"><i class="fab fa-github"></i></a>
        </div>
      </div>
    </section>
  
    <footer class="py-4">
      <div class="container text-center">
        <p>© 2025 imen sadki</p>
      </div>
    </footer>
  `,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'portfolio';
}