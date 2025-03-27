import { Component } from '@angular/core';
import {Project} from '../../services/models/project';
import {Router} from '@angular/router';
import {ProjectsService} from '../../services/services/projects.service';
import { TokenService } from '../../token/token.service';
@Component({
  selector: 'app-task-manager-home',
  standalone: false,
  templateUrl: './task-manager-home.component.html',
  styleUrl: './task-manager-home.component.scss'
})
export class TaskManagerHomeComponent {
  projects: Project[] = [];

  constructor(
    private projectService: ProjectsService,
    private router: Router,
    private tokenService: TokenService
  ) {}

  ngOnInit(): void {
    console.log('Token payload:', this.tokenService.payload);
    console.log('Roles:', this.tokenService.roles);
    this.loadProjects();

  }

  loadProjects() {
    this.projectService.getMyProjects().subscribe({
      next: (data) => {
        this.projects = data;
      },
      error: (err) => {
        console.error('Error loading projects:', err);
        // Adaugă mai multe detalii despre eroare
        console.error('Error details:', err.message, err.status, err);
      }
    });
  }

  goToCreateProject() {
    this.router.navigate(['/create-project']);
  }

}
